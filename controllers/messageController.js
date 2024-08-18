const pool = require("../db/pool");

exports.getMessages = async (req, res) => {
  const result = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  res.render("index", { title: "Mini Message Board", message: result.rows });
};

exports.getMessageForm = (req, res) => {
  res.render("form", { title: "Form Field" });
};

exports.getMessageById = async (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  try {
    const result = await pool.query("SELECT * FROM messages WHERE id = $1", [
      messageId,
    ]);
    if (result.rows.length > 0) {
      res.render("message", {
        title: "Message Detail",
        message: result.rows[0],
      });
    } else {
      res.status(404).send("Message not found");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.createMessage = async (req, res) => {
  const { user, message } = req.body;
  await pool.query("INSERT INTO messages (user_name, text) VALUES ($1, $2)", [
    user,
    message,
  ]);
  res.redirect("/");
};
