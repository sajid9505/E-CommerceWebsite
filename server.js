var http = require('http');
var express = require('express')
var app = express();
var server = http.Server(app);
const CURRENT_WORKING_DIR = process.cwd()
var path = require('path');
var io = require('socket.io')(http);
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// var mongo = require('mongodb')
// var mongoose = require('mongoose')
// var db, uri = "mongodb+srv://sajid9505:mongoDBatlas@cluster0-ebrcf.mongodb.net/E-commerce?retryWrites=true&w=majority"
// mongoose.connect(uri, 
//       {useNewUrlParser:true, useUnifiedTopology: true })
//       mongoose.connection.on('connected', function(){
//             console.log("connected")
//       });
//   mongoose.connection.on('error', function(err){
//       console.log('Could not connect to MongoDB')
//   })

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});



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

app.get('/cart', function (request, response) {
  response.sendFile(__dirname + '/views/cart.html')
})

require('./routes/product.routes')(app)

server.listen(3000, 'localhost', function () {
  console.log('server running ...')
});