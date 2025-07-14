const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("<h1>From index router</h1>");
});

router.post("/signin", (req, res) => {});
router.post("/content", (req, res) => {});
router.get("/content", (req, res) => {});
router.delete("/content", (req, res) => {});
router.post("/brain/:shareLink", (req, res) => {});
module.exports = router;
