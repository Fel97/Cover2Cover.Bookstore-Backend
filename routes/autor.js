const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  return res.send({
    id: 1,
    firstname: 'Feliks',
    lastname: 'Elezovic',
  });
});

router.get("/", async (req, res) => {
  return res.send([]);
});

router.post("/:id", async (req, res) => {
  return res.send({
    id: 1,
    firstname: 'Feliks',
    lastname: 'Elezovic',
  });
});

router.delete("/:id", async (req, res) => {
  return res.send({
    success: "true",
    id: 1
  });
});

module.exports = router;
