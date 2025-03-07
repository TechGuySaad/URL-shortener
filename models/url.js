const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
  },
  analytics: {
    type: Number,
    default: 0,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const urlModel = mongoose.model("url", urlSchema);

module.exports = urlModel;
