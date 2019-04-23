const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();
require("isomorphic-fetch");

app.set("view engine", "ejs");

app.use(bodyParser.json());

port = process.env.PORT || 4000;

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("Listening on port " + port);
});

app.get("/", (req, res, next) => {
  res.render("main");
});
