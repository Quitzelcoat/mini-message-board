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
  res.render("form", { title: "Form Field" });
});

router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = messages[messageId];

  if (message) {
    res.render("message", { title: "Message Detail", message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

router.post("/new", (req, res) => {
  const { user, message } = req.body;
  messages.push({ text: message, user: user, added: date.toDateString() });
  res.redirect("/");
});

module.exports = router;
