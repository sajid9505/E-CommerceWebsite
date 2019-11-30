var http = require('http');
var express = require('express')
var app = express();
var server = http.Server(app);
const CURRENT_WORKING_DIR = process.cwd()
var path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

var mongo = require('mongodb')
var mongoose = require('mongoose')
var db, uri = "mongodb+srv://sajid9505:mongoDBatlas@cluster0-ebrcf.mongodb.net/E-commerce?retryWrites=true&w=majority"
mongoose.connect(uri, 
      {useNewUrlParser:true, useUnifiedTopology: true })
      mongoose.connection.on('connected', function(){
            console.log("connected")
      });
  mongoose.connection.on('error', function(err){
      console.log('Could not connect to MongoDB')
  })


app.use('/public', express.static(path.join(CURRENT_WORKING_DIR, 'public')))


app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html')
})

app.get('/productview', function (request, response) {
  response.sendFile(__dirname + '/views/product.html')
})

app.get('/checkout', function (request, response) {
  response.sendFile(__dirname + '/views/checkout.html')
})

require('./routes/product.routes')(app)

server.listen(3000, 'localhost', function () {
  console.log('server running ...')
});