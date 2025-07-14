const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("<h1>From index router</h1>");
});

module.exports = router;
