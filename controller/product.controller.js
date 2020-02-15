const db = require("../db");

let products = db.get("products"); // Get data from db users

const renderProduct = async (req, res, next) => {
  let searchQuery = "";
  res.render("products", {
    products: products.value(), // Get all value in db
    searchQuery
  });
};

const search = async (req, res, next) => {
  var q = req.query.q;
  let matchProduct = products.value().filter((products) => {
    return products.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  console.log(matchProduct);
  res.render("products", {
    products: matchProduct,
    searchQuery: q // To return a values have just inputted/
  });
};

module.exports = {
  renderProduct,
  search
};
