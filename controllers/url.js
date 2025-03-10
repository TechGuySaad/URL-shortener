const shortid = require("shortid");
const urlModel = require("../models/url");

async function handleGenerateNewUrl(req, res) {
  const body = req.body;

  const shortId = shortid.generate();

  await urlModel.create({
    url: body.url,
    shortId: shortId,
    createdBy: req.user._id,
  });

  return res.render("home", {
    redirectUrl: `http://localhost:8001/${shortId}`,
  });
}

async function handleRedirect(req, res) {
  const id = req.params.id;

  const urlEntry = await urlModel.findOne({ shortId: id });
  let analytics = await urlEntry.analytics;
  analytics = analytics + 1;
  await urlModel.findOneAndUpdate({ shortId: id }, { analytics: analytics });

  return res.status(301).redirect(`${urlEntry.url}`);
}

async function handleAnalytics(req, res) {
  const id = req.params.id;
  const urlEntry = await urlModel.findOne({ shortId: id });
  return res.status(200).json({ analytics: urlEntry });
}

module.exports = {
  handleGenerateNewUrl,
  handleRedirect,
  handleAnalytics,
};
