'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const shortId = require('shortid');
const bodyParser = require('body-parser');
const validUrl = require('valid-url');
require('dotenv').config();
const cors = require('cors');
const app = express();

// Basic Configuration 
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connect success');
})


app.use('/public', express.static(process.cwd() + '/public'));
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//Create Schema
const Schema = mongoose.Schema;
const dbSchema = new Schema({
  original_url: String,
  short_url: String
})
const URL = mongoose.model('URL', dbSchema);




app.post('/api/shorturl/new', async function (req, res) {

  const url = req.body.url // pega o input
  const hashUrl = shortId.generate() // gera o hash
 
  // verifique se o url é válido ou não
  if (!validUrl.isWebUri(url)) {
    res.json({ error:"invalid URL" })
  } else {
    try {
      // Verifica se existe no banco
      let findOne = await URL.findOne({
        original_url: url
      })
      if (findOne) {
        res.json({
          original_url: findOne.original_url,
          short_url: findOne.short_url
        })
      } else {
        // Caso não exista ele pega e salva no banco de dados
        findOne = new URL({
          original_url: url,
          short_urlt: hashUrl
        })
        await findOne.save()
        res.json({
          original_url: findOne.original_url,
          short_url: findOne.short_url
        })
      }
    } catch (err) {
      console.error(err)
      res.status(500).json('Server error...')
    }
  }
})


app.get('/api/shorturl/:short_url?', async function (req, res) {
  try {
    const url = await URL.findOne({
      short_url: req.params.short_url
    })
    if (url) {
      return res.redirect(url.original_url)
    } else {
      return res.status(404).json('URL found')
    }
  } catch (err) {
    console.log(err)
    res.status(500).json('Server error')
  }
})

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
})