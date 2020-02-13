const db = require("../db");
const users = db.get("users"); // Get data from db users

module.exports.requireAuth = (req, res, next) => {
  if (!req.cookies.authId) {
    res.redirect("/auth/login");
    return;
  }
  let user = users.find({ id: req.cookies.authId }).value();
  if (!user) {
    res.redirect("/auth/login");
    return;
  }
  next();
};
