const express = require("express");

const {
  handleGenerateNewUrl,
  handleRedirect,
  handleAnalytics,
} = require("../controllers/url");

const router = express.Router();

// Generates a new url and adds it to the database
router.route("/").post(handleGenerateNewUrl);
// Gets the analytics for a redirect url
router.route("/analytics/:id").get(handleAnalytics);
// Redirects to the url id given in the req.params.id
router.route("/:id").get(handleRedirect);

module.exports = router;
