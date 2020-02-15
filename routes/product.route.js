const express = require("express");
const router = express.Router();

const { renderProduct, search } = require("../controller/product.controller");

// Render page users
router.get("/", renderProduct);
// Search name of product
router.get("/search", search);

module.exports = router