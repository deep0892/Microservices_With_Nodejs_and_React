const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
    const event = req.body;

    axios.post("http://locahost:4000/events", events);
    axios.post("http://locahost:4001/events", events);
    axios.post("http://locahost:4002/events", events);

    return res.send({ status: "OK" });
});

app.listen(4005, () => {
    console.log("Posts service listening on port 4005");
});