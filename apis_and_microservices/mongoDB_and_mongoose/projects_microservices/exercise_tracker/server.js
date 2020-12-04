const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const shortId = require('shortid');
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(cors())



app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cors());
app.use(express.json());

const uri = process.env.URL_MONGO;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connect success');
})


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})


let exerciseSessionSchema = new mongoose.Schema({
  description: { type: String, require: true  },
  duration: { type: Number, require: true },
  date: String
})

let userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  log: [exerciseSessionSchema]
})

let Session = mongoose.model('Session', exerciseSessionSchema)
let User = mongoose.model('User', userSchema)


app.post('/api/exercise/new-user', (req, res) => {
  const { username } = req.body
  let newUser = new User({ username })

  newUser.save((err,user) => {
    if (err) return console.error(err)
    let result = {}
    result['username'] = user.username
    result['_id'] = user.id
    res.json(result)
  })
})

app.get('/api/exercise/users', (req, res) => {
  User.find({}, (err, data) => {
    if (err) return console.error(err)
    res.json(data)
  })
})

app.post('/api/exercise/add', (req, res) => {
  const { userId, description, duration, date } = req.body
  const newSession = new Session({ description, duration: parseInt(duration), date })

  if(newSession.date === '') {
    newSession.date = new Date().toISOString().substring(0,10)
  }

  User.findByIdAndUpdate(
    userId,
    {$push: {log: newSession}},
    {new: true},
    (err, data) => {
    if (err) return console.error(err)
      let responseObject = {}
      responseObject['_id'] = data.id
      responseObject['username'] = data.username
      responseObject['description'] = newSession.description
      responseObject['duration'] = newSession.duration
      responseObject['date'] = new Date(newSession.date).toDateString()
      res.json(responseObject)
    }
  )

})

app.get('/api/exercise/log', (req, res) => {

  User.findById(req.query.userId, (err, result) => {
    if (err) return console.error(err)
    
     let responseObject = result
      
      if(req.query.from || req.query.to){
        
        let fromDate = new Date(0)
        let toDate = new Date()
        
        if(req.query.from){
          fromDate = new Date(req.query.from)
        }
        
        if(req.query.to){
          toDate = new Date(req.query.to)
        }
        
        fromDate = fromDate.getTime()
        toDate = toDate.getTime()
        
        responseObject.log = responseObject.log.filter((session) => {
          let sessionDate = new Date(session.date).getTime()
          
          return sessionDate >= fromDate && sessionDate <= toDate
          
        })
      }

      if(req.query.limit){
        responseObject.log = responseObject.log.slice(0, req.query.limit)
      }
      
      responseObject = responseObject.toJSON()
      responseObject['count'] = result.log.length
      res.json(responseObject)

  })
})