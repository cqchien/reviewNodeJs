// Call library used in project.
const express = require("express");
const bodyParser = require("body-parser"); // To get data to req.body
const cookieParser = require("cookie-parser");

var userRoute = require("./routes/user.route");
var authRoute = require("./routes/auth.route");
const { requireAuth } = require("./middlewares/auth.middleware");

const app = express();
const port = 2002;
// Set views engine
app.set("view engine", "pug");
app.set("views", "./view");
// Set middlewares
app.use(bodyParser.json()); // for paresing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static("public" + __dirname));

// Render homepage
app.get("/", requireAuth, (req, res, next) => {
  res.render("index");
});
app.use("/users", requireAuth, userRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
