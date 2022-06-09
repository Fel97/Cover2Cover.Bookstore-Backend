const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  return res.send("error");
});

module.exports = router;
