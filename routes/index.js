const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/", messageController.getMessages);
router.get("/new", messageController.getMessageForm);
router.get("/message/:id", messageController.getMessageById);
router.post("/new", messageController.createMessage);

module.exports = router;
