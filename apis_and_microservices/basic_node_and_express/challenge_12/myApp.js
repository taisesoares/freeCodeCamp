var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/name', (req, res) => {
  const { first, last } = req.body
  res.json({
    name: `${first} ${last}`
  })
})

module.exports = app;
