const express = require("express");
const app = express();
const port = 3000;

const users = [];

// static files //
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/javascript"));

// view engine //
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log("listening on http://localhost:${port}");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const emailUser = req.body.email;
  const passwordUser = req.body.password;

  users.push({
    email: emailUser,
    password: passwordUser,
  });
  console.log(users);
  res.redirect("/tampilkan-user");
});

app.get("/jumlah-user", (req, res) => {
  res.send(`Jumlah User ${users.length}`);
});

app.get("/tampilkan-user", (req, res) => {
  res.render("users", {
    users,
  });
});
