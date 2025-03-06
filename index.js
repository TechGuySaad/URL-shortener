const express = require("express");
const path = require("path");
const urlRouter = require("./routes/url.js");
const pagesRouter = require("./routes/staticPages.js");

const mongooseConnect = require("./connection");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

mongooseConnect("mongodb://127.0.0.1:27017/url-shortener")
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch(() => {
    console.log("error connecting to database");
  });
app.use("/home", pagesRouter);
app.use("/", urlRouter);

app.listen(8001, () => console.log("started listening on port 8001"));
