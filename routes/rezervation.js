const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  return res.send({
    id: 1,
    isbn: '809809832473289040dsjaf',
    userid: 2,
    startdate: new Date().toJSON(),
    enddate: null,
    status: 1,
  });
});

router.get("/", async (req, res) => {
  return res.send([]);
});

router.post("/cancel/:id", async (req, res) => {
  return res.send({
    success: true,
    message: "Rezervation successfuly canceled!",
  });
});

router.post("/ship/:id", async (req, res) => {
  return res.send({
    success: true,
    message: "Rezervation successfuly shipped!",
  });
});

router.post("/complete/:id", async (req, res) => {
  return res.send({
    success: true,
    message: "Rezervation successfuly completed!",
  });
});

module.exports = router;
