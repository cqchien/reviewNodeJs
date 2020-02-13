const express = require("express");
const router = express.Router();
const {renderLogin, postLogin} = require("../controller/auth.controller");
const { validateLogin } = require("../validate/login.validate");

// Render page auth
router.get("/login", renderLogin);

router.post("/login",validateLogin, postLogin)

module.exports = router;
