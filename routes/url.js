const express = require("express");

const {
  handleGenerateNewUrl,
  handleRedirect,
  handleAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.route("/url").post(handleGenerateNewUrl);
router.route("/url/analytics/:id").get(handleAnalytics);
router.route("/:id").get(handleRedirect);

module.exports = router;
