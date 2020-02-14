const db = require("../db");
const users = db.get("users"); // Get data from db users
const md5 = require("md5"); // JS function to hash message
const renderLogin = async (req, res, next) => {
  res.render("auth/login", { values: "" });
};

const postLogin = async (req, res, next) => {
  let { email, password } = req.body;
  let user = users.find({ email }).value();
  if (!user) {
    res.render("auth/login", {
      error: "User does not exist",
      values: req.body
    });
    return;
  }
  const hashedPassword = md5(password);
  console.log(hashedPassword);
  if (user.password !== hashedPassword) {
    res.render("auth/login", {
      error: "Password  is wrong",
      values: req.body
    });
    return;
  }
  res.cookie("authId", user.id, { signed: true });
  res.redirect("/users");
};
module.exports = {
  renderLogin,
  postLogin
};
