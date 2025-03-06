const express = require("express");
const { handleGetPage } = require("../controllers/staticPages");

const router = express.Router();

router.route("/").get(handleGetPage);

module.exports = router;
