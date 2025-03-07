const { getUser } = require("../service/auth");

function restrictToLoggedInUserOnly(req, res, next) {
  const uid = req.cookies?.uid;
  if (!uid) return res.redirect("login");

  const user = getUser(uid);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

function checkAuth(req, res, next) {
  const uid = req.cookies?.uid;
  const user = getUser(uid);
  req.user = user;
  next();
}

module.exports = { restrictToLoggedInUserOnly, checkAuth };
