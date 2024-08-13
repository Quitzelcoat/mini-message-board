const express = require("express");
const router = express.Router();

const date = new Date();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: date.toDateString(),
  },
  {
    text: "Hello World",
    user: "Charles",
    added: date.toDateString(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", message: messages });
});

router.get("/new", (req, res) => {
  res.render("new", { title: "New Message" });
});

router.get("/form", (req, res) => {
  res.render("form", { title: "Form Field" });
});

router.post("/new", (req, res) => {});

module.exports = router;
