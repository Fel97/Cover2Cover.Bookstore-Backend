const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  return res.send({
    id: 3,
    name: 'komedy',
  });
});

router.get("/", async (req, res) => {
    return res.send([]);
});

router.post("/:id", async (req, res) => {
  return res.send({
    id: 1,
    name:'komedy',
  });
});

router.delete("/:id", async (req, res) => {
  return res.send({
    success: "true",
    id: 5,
  });
});

module.exports = router;
