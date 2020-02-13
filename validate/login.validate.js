module.exports.validateLogin = (req, res, next) => {
  let loginDTO = req.body;
  if (!loginDTO.email || !loginDTO.password) {
    res.render("auth/login", {
      error: "Email and Password is required",
      values: req.body
    });
    return;
  }
  next();
};
