const express = require("express");
const {
  handleGetPage,
  handleLoginPage,
  handleSignupPage,
} = require("../controllers/staticPages");

const router = express.Router();

// renders the home page
router.route("/home").get(handleGetPage);

// render the login page
router.route("/login").get(handleLoginPage);
// render the signup page
router.route("/signup").get(handleSignupPage);

module.exports = router;
