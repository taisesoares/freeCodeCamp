var express = require('express');
var app = express();


app.get('/json', (req, res) => {
  let response = 'Hello json'
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({message: response.toUpperCase()});
  }
  res.json({message: response});
});

module.exports = app;
