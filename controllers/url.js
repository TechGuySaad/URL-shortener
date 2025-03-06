const shortid = require("shortid");
const urlModel = require("../models/url");

async function handleGenerateNewUrl(req, res) {
  const body = req.body;

  const shortId = shortid.generate();
  //   console.log("New url generated");
  const url = await urlModel.create({ url: body.url, shortId: shortId });

  console.log("request was made");
  return res.render("home", {
    redirectUrl: `http://localhost:8001/${shortId}`,
  });
  // return res.status(201).json({
  //   status: "successfully created new url",
  //   url: `http://localhost:8001/${shortId}`,
  // });
}

async function handleRedirect(req, res) {
  //   console.log("Handled Redirect");
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

module.exports = { handleGenerateNewUrl, handleRedirect, handleAnalytics };
