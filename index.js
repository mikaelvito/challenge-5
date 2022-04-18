const express = require("express");
const { render } = require("ejs");
const app = express();
const port = 3000;
const articles = require("./data");

const users = [];

users.push({ email: "mikaelvto@gmail.com", password: "asdasdasd" });

// static files //
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/javascript"));
app.use("/img", express.static(__dirname + "public/assets"));

// view engine //
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/articles/:id", (req, res) => {
  const article = articles.find((e) => e.id === Number(req.params.id));
  res.status(200).json(article);
});

app.post("/api/articles", (req, res) => {
  const { email, password } = req.body;
  const lastId = articles[articles.length - 1].id;
  const newId = lastId + 1;

  const article = {
    id: newId,
    email: email,
    password: password,
  };

  articles.push(article);
  res.status(201).json(article);
});

app.put("/api/articles/:id", (req, res) => {
  const indexArticle = articles.findIndex(
    (e) => e.id === Number(req.params.id)
  );

  articles.splice(indexArticle, 1);
  res.status(200).json({
    message: `Article with UD ${req.params.id} has been deleted`,
  });
});

app.listen(port, () => {
  console.log("listening on http://localhost:${port}");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/landing", (req, res) => {
  res.render("landing");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  users.push({
    email: email,
    password: password,
  });
  console.log(users);
  res.redirect("/tampilkan-user");
});

app.get("/jumlah-user", (req, res) => {
  res.send(`Jumlah User ${users.length}`);
});

app.get("/tampilkan-user-json", (req, res) => {
  res.json(users);
});

app.get("/tampilkan-user", (req, res) => {
  res.render("users", {
    users,
  });
});

app.get("/game", (req, res) => {
  res.render("game");
});
