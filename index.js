const express = require("express");
const app = express();
app.use(express.json());

const books = require("./routes/books");
const users = require("./routes/users");
const auth = require("./routes/auth");
const autors = require("./routes/autor");
const genres = require("./routes/genres");
const rezervations = require("./routes/rezervation");

app.get("/error", (req, res) => {
  return res.send("Wrong route");
});

app.use("/api/auth", auth);
app.use("/api/books", books);
app.use("/api/users", users);
app.use("/api/autors", autors);
app.use("/api/genres", genres);
app.use("/api/rezervations", rezervations);

app.get("*", function (req, res) {
  res.redirect("/error");
});

const port = 3000;
app.listen(port, () => console.log("Backend se vrti na portu: " + port));
