const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Data Structure of our post in Query Service
// const post = {
//     postId: {
//         id: "postId",
//         title: "post title",
//         comments: [{
//                 id: "commentId",
//                 content: "comment content",
//                 status: "pending|approved|rejected",
//             },
//             {
//                 id: "commentId",
//                 content: "comment content",
//                 status: "pending|approved|rejected",
//             },
//         ],
//     },
// };

const posts = {};

app.get("/posts", (req, res) => {
  return res.send(posts);
});

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id == id;
    });

    comment.status = status;
    comment.content = content;
  }
};

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  return res.send({});
});

app.listen(4002, async (args) => {
  console.log("Query service listening on port 4002");

  const res = await axios.get("http://event-bus-srv:4005/events");

  for (let event of res.data) {
    console.log("Processing event: ", event.data);
    handleEvent(event.type, event.data);
  }
});
