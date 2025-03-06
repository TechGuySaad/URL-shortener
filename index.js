const express = require("express");
const urlRouter = require("./routes/url.js");

const mongooseConnect = require("./connection");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongooseConnect("mongodb://127.0.0.1:27017/url-shortener")
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch(() => {
    console.log("error connecting to database");
  });
app.use("/", urlRouter);

app.listen(8001, () => console.log("started listening on port 8001"));
