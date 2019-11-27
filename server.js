var http = require('http');
var express = require('express')
var app = express();
const CURRENT_WORKING_DIR = process.cwd()
var path = require('path');


app.use('/public', express.static(path.join(CURRENT_WORKING_DIR, 'public')))


app.get('/', function(request, response){
    response.sendFile(__dirname+'/views/index.html')
  })
  
  app.get('/second', function(request, response){
    response.sendFile(__dirname+'/views/second.html')
  })

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});