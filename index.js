const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log("listening on http://localhost:${port}");
});

app.get("/", (req, res) => {
  res.render("index");
});
