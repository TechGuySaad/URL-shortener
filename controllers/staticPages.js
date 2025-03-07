const urlModel = require("../models/url");

//  Renders homepage
async function handleGetPage(req, res) {
  if (!req.user) return res.redirect("login");

  const allUrls = await urlModel.find({ createdBy: req.user._id });

  return res.render("home", {
    urls: allUrls,
  });
}

// Renders login page
async function handleLoginPage(req, res) {
  return res.render("login");
}

// Renders signup page
async function handleSignupPage(req, res) {
  return res.render("signup");
}

module.exports = { handleGetPage, handleLoginPage, handleSignupPage };
