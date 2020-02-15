const shortid = require("shortid");
const db = require("../db");
const sessions = db.get("sessions"); // Get data from db users
// Because user dont sign in, we cann't use userId to create cookies
module.exports.createSessionId = (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    let sessionId = shortid.generate();
    // use random string to create sessionId of cookie
    res.cookie("sessionId", sessionId, {
      signed: true
    });
    sessions.push({ id: sessionId }).write();
  }
  next();
};
