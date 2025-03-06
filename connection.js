const mongoose = require("mongoose");

function mongooseConnect(url) {
  return mongoose.connect(url);
}

module.exports = mongooseConnect;
