const express = require("express");
const router = express.Router();
const { postCreate } = require("../validate/user.validate");
const {
  renderUser,
  search,
  renderCreateUser,
  viewDetailUser,
  createUser
} = require("../controller/user.controller");

// Render page users
router.get("/", renderUser);
// test cookie
router.get("/cookie", (req, res, next) => {
  res.cookie("user-id", 12345);
  res.send("Hello");
});
// Search Feature
router.get("/search", search);
// Show the template of create featue.
router.get("/create", renderCreateUser);
// View detail of user
router.get("/:userId", viewDetailUser);
// Create user.
router.post("/create", postCreate, createUser);

module.exports = router;
