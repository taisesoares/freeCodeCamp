var express = require('express');
var app = express();


app.use(function middleware(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

module.exports = app;
