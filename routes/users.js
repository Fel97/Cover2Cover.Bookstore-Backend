const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  return res.send({id: 3, name: 'Feliks'});
});

router.get("/", async (req, res) => {
  return res.send([]);
});

module.exports = router;
