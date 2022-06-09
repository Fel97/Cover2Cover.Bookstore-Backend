const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {

  let book = {
    id: 2,
    title: 'Titnik',
    description: 'opis',
    imageurl: 'imageurl',
    autor_id: 4,
    genre_id: 3,
    isbn: '3434343',
    unnum: '2343243242',
    active: true,
    rezerved: false,
  };

  return res.send(book);
});

router.get("/", async (req, res) => {
    return res.send([]);

});
router.get("/all", async (req, res) => {
  return res.send([]);
});
router.delete("/all/:unnum", async (req, res) => {
  return res.send({
    success: "true",
    id: 3,
  })
});

router.delete("/:id", async (req, res) => {
  return res.send({
    success: "true",
    id: 3,
  })
});

router.post("/deactivate/:id", async (req, res) => {
  return res.send({
    success: "true",
    id: 5,
  });
});

router.put("/", async (req, res) => {
  return res.send({
    success: true,
  });
});

module.exports = router;
