const db = require("../db");
const users = db.get("users"); // Get data from db users

module.exports.requireAuth = (req, res, next) => {
  let cookie = req.signedCookies.authId;

  if (!cookie) {
    res.redirect("/auth/login");
    return;
  }
  let user = users.find({ id: cookie }).value();
  if (!user) {
    res.redirect("/auth/login");
    return;
  }
  // transmit to next middleware
  res.locals.user = user; // transmit user to use it shown in template

  next();
};
