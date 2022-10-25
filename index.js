const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categoris = require("./data/categori.json");
const coursesTopic = require("./data/courstopic.json");

app.get("/", (req, res) => {
  res.send("Hellow This is Creative learn");
});

app.get("/course-categori", (req, res) => {
  res.send(categoris);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const topic = coursesTopic.filter((topic) => topic.id == id);
  res.send(topic);
});

app.listen(port, () => console.log("Creative learn server run port :", port));
