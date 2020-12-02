// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/timestamp/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});


app.get("/api/timestamp/:dateString?", (req, res) => {
  const dateString = req.params.dateString;
  let date;

  /**
   * Se a string de data estiver vazia, deve ser equivalente a new Date() 
   * para retornar a hora atual em formato unix e UTC, ou seja, o serviço 
   * usa o carimbo de data/hora atual.
   */
  if (!dateString) {
    date = new Date()
  } else {
    
    /**
     * Se dateString não estiver vazio.
     * Se dateStriing não for um inteiro, converta dataString em um inteiro
     */
    if (!isNaN(dateString)) {
      date = new Date(parseInt(dateString))
    } else {
      date = new Date(dateString)
    }
  }
  
  /**
   * Se a string de data for inválida, a API retorna um erro JSON
   * { error: 'Invalid Date' }
   */
  if (date.toString() === 'Invalid Date') {
    res.json({ error: date.toString() })
  } else {
    /**
     * Se a string de data for válida, a API retorna um JSON como este formato:
     * {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
     */
    res.json({ unix: date.getTime(), utc: date.toUTCString() })
  }
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
