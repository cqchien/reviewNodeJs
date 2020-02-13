const db = require("../db");
const users = db.get("users"); // Get data from db users

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
  if (user.password !== password) {
    res.render("auth/login", {
      error: "Password  is wrong",
      values: req.body
    });
    return;
  }
  res.cookie("authId", user.id);
  res.redirect("/users");
};
module.exports = {
  renderLogin,
  postLogin
};
