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
//         comment: [{
//                 id: "commentId",
//                 content: "comment content",
//             },
//             {
//                 id: "commentId",
//                 content: "comment content",
//             },
//         ],
//     },
// };

const posts = {};

app.get("/posts", (req, res) => {
    return res.send(posts);
});

app.post("/events", async(req, res) => {
    const { type, data } = req.body;

    if (type === "CommentCreated") {
        const { id, title } = data;
        post[id] = { id, title, comment: [] };
    }

    if (type === "CommentCreated") {
        const { id, content, postId } = data;

        const post = post[postId];
        post.comment.push({ id, content });
    }

    return res.send({});
});

app.listen(4002, (args) => {
    console.log("Query service listening on port 4002");
});