const express = require('express');
const router = express.Router();
const { renderUser, search, renderCreateUser, viewDetailUser, createUser } = require("../controller/user.controller")

// Render page users
router.get("/", renderUser);
// Search Feature
router.get("/search", search);
// Show the template of create featue.
router.get("/create", renderCreateUser);
// View detail of user
router.get("/:userId", viewDetailUser);
// Create user.
router.post("/create", createUser);

module.exports = router;