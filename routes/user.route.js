const express = require("express");
const router = express.Router();
const multer = require("multer");

const { validateCreate } = require("../validate/user.validate");
const {
  renderUser,
  search,
  renderCreateUser,
  viewDetailUser,
  createUser
} = require("../controller/user.controller");

const upload = multer({ dest: "./public/uploads/" });

// Render page users
router.get("/", renderUser);
// test cookie
router.get("/cookie", (req, res, next) => {
  res.cookie("user-id", 12345);
  res.send("Hello");
});
// Search Name
router.get("/search", search);
// Show the template of create featue.
router.get("/create", renderCreateUser);
// View detail of user
router.get("/:userId", viewDetailUser);
// Create user.
router.post("/create", upload.single("avatar"), validateCreate, createUser);

module.exports = router;
