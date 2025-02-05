const express = require("express");
const router = express.Router();

// Route to get all tickets
router.get("/tickets", (req, res) => {
  res.json({ message: "List of all tickets" });
});

module.exports = router;
