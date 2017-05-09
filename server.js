// var http = require("http");

// http.createServer(function (request, response) {

//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');


var express = require('express');

// Constants
var port = process.env.PORT || 8081;

// App
var app = express();
app.get('/', function (req, res){
  res.send('Hello Docker!!!!!!!');
});

app.listen(PORT);
console.log("application started at 8081");