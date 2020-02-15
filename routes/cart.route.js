const express = require("express");
const router = express.Router();

const { addToCart } = require("../controller/cart.controller");

// Render page users
router.get("/add/:productId", addToCart);

module.exports = router;
