require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors");

app.use(cors());


// DATABASEURL = 'mongodb://localhost/workouts'
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json()); 

const workoutsRouter = require('./routes/workouts')
app.use('/workouts', workoutsRouter)

app.listen(3001, () => console.log('Server Started'))

app.get('/', (req, res) => {
    res.send("HELLO")
})


