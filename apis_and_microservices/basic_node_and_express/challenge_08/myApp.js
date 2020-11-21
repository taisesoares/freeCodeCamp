var express = require('express');
var app = express();


const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get('/now', middleware, (req, res) => {
  res.send({
    time: req.time
  })
});

module.exports = app;
