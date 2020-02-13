module.exports.postCreate = (req, res, next) => {
  let userDTO = req.body;
  let error = [];
  if (!userDTO.name || !userDTO.phone) {
    error.push("Name and Phone is required");
  }
  if (error.length) {
    res.render("users/create", { error, values: req.body });
    return;
  }
  //! to transmit the success paragram to next middleware
  res.locals.success = true
  next();
};
