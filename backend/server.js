require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors");

app.use(cors());


// DATABASEURL = 'mongodb://localhost/workouts'
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost/workouts', { useNewUrlParser: true, useUnifiedTopology: true });

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

app.listen(8080, () => console.log('Server Started'))

app.get('/', (req, res) => {
    res.send("HELLO")
})



// var https = require('https');
// var fs = require('fs');
// var options = {
//   key: 'MIIEogIBAAKCAQEAiboSHz82rFv3Yz5VekdBPG1JEGxkqNcKbqD6xxvbx2GuIGXA+8mXzp3pBww+ZEqZKXCDREMOq1Ed4+IaCAJf/Ad7ss2aTcDgqYTWG6tdd4mOyKzgrxw7MljApC4oqBBx//HMgf9WXJnEBdj5quw7Dn3iOcA8jFYdfYmE5JbhMt3uGAbsZTHqgV4QUdt+Ne9mETAn+x28+GCUN9cJsZxEL9QN8V3qhZtvxY+QDWzhgey8KKhpNc3WZ/DJyySvK3h4Eo2V6FJQkO/TYBFymvcY47racgoaSzthFCMFdG08fwJwBJYy1xaPZhvgB396dIG91R1vhfqPiiwXSiMdsbVRwwIDAQABAoIBAEqOLIM3wAv72Oajdrgz3G+upU+7rZ3sktwiTr78KLQ8/3rQOnDSx1f1CZFkIl4+N71EB/sq5cT9q1WSLw9I4dbX4jF/tVkD4VpC63idAoLUNzQQyaxhdvYhL19xEVcxV9T6ev+gTorgPkoAE99f8/Q7Vvx2QRCjCWHM0ODBgHT8/K0j3LuDLOudNTKyaZln3j4soROcKHxLbXZpvnXIApgEvkrPFQuLQ8AhcoxxO8VgtTFJFcbmxl4lJIahAXjKpsas5mOHmwmZxP1tOmAvVP8cclq1QC/9ASsO/wTVcxn1aQ2K5OfZo2+w+fVq8zETMmQgXFS1CAUx4j0nAI0chCkCgYEAyjadNu9+JtZGu8vDS7MFnm1oCZ5G4Vw2SB1q8cXuUw2MJKsJ2WeyLTWEeNiSbcqbloTCuvxqOZMTn3/61tIzWIgpYUv+UvcdC2X+kUXR72XBuYQE374brFzKY5YpbpSChZkV35yt2ORbKvXGCgNsbr6rMa0nX3iVvmZYA+n0KT0CgYEArlxasYCzMO8DjXkDy7MvOoZE+Wh4PeF0DZ1CnftZXk2/T6o6/DyRyUY1V6GVsJQBg9ZR+EKFQFwZ+BgMkb3/GHlMmDAETt9fPDeRAlP/+/aoFxm8yeMUKp/OfzfvGqW8Ofndb7fytWLQplw8opXLjwLqHAovxTEV6FP8L4kZFv8CgYBAj4dKTtR8GdWjh77moFWe61dYGsyOjx5Vj+7hGkyo/55K5sDSRKVCgd+1pY+6tgFO4Tw67vQLRcXyGq4/gAUcsvxjMBwW6QbA6OOKBjysrlRXoqrbtJqpQUbs3LiFsayqcuHk7uUiZmYlJSsBb25jPUTzK1FyzdEhZROczElEEQKBgFN3uJ7SenWJZcz6yntgGtLMZgZzIWSWIeVGjBZutZh0ZYnwdu463JtatbxuiOcP4y3GklTjG0D1FiVy9clrB8wifS05h0ZunfuIqi1QIvHuYQc19e87enLxL3wtPZQnFNU4LO4HQ/PbCwEolIpMZTbf8UxdAANI/TDLy6TB37XnAoGAKGhP1rbNX+2hO85dLV6PDxgRo4dMVbzJzFtfa8R/fuQTdizlJGWudKzXxI0ZR0iiFeqkqs/4R9MGQI5PFNc4eOII9A+vy57lfc2a3Kk45C/O51jlrXPBPSRLwzT/daOljPWSiqkY02NfI72BOGq5a2UEmqp8IquRC7Lgg3Ur03E=',
//   cert: fs.readFileSync('./server.crt')
// };

// https.createServer(options, function (req, res) {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(3001);
