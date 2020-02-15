const db = require("../db");

module.exports.countCart = (req, res, next) => {
  let sessionId = req.signedCookies.sessionId;
  countCart = Object.values(
    db
      .get("sessions")
      .find({ id: sessionId })
      .get("cart", 0)
      .value()
  ).reduce((a, b) => {
    return a + b;
  }, 0);
  res.locals.countCart = countCart;
  next();
};
