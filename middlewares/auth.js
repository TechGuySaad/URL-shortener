const { getUser } = require("../service/auth");

function restrictToLoggedInUserOnly(req, res, next) {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) return res.redirect("login");

  const user = getUser(token);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

function checkAuth(req, res, next) {
  const token = req.headers.authorization?.split("Bearer ")[1];
  // res.header("Authorization", token);

  if (token) {
    const user = getUser(token);

    req.user = user;
  }
  next();
}

module.exports = { restrictToLoggedInUserOnly, checkAuth };
