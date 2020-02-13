const db = require("../db");
const shortid = require("shortid"); // To support for creating the id of user in db

let users = db.get("users"); // Get data from db users

const renderUser = async (req, res, next) => {
  let searchQuery = "";
  res.render("users", {
    users: users.value(), // Get all value in db
    searchQuery
  });
};

const search = async (req, res, next) => {
  var q = req.query.q;
  let matchUser = users.value().filter((user) => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  console.log(matchUser);
  res.render("users", {
    users: matchUser,
    searchQuery: q // To return a values have just inputted/
  });
};

const renderCreateUser = async (req, res, next) => {
  console.log(req.cookies)
  res.render("users/create", { values: " " });
};

const viewDetailUser = async (req, res, next) => {
  let userId = req.params.userId;
  let user = users.find({ id: userId }).value();
  console.log(user);
  res.render("users/view", { user });
};

const createUser = async (req, res, next) => {
  let userDTO = req.body;
  console.log(res.locals)
  userDTO.id = shortid.generate();
  users.push(userDTO).write(); // .write() to write again new data to db
  res.redirect("/users");
};
module.exports = {
  renderUser,
  search,
  renderCreateUser,
  viewDetailUser,
  createUser
};
