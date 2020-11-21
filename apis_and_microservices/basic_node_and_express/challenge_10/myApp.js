var express = require('express');
var app = express();

function handler(req, res) {
  const { first, last } = req.query
  res.json({
    name: `${first} ${last}`
  })
}

app.route('/name').get(handler).post(handler)

module.exports = app;
