// requires
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// static routes
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public/bower_components/fabric.js/dist'));

io.on('connection', function(socket) {
  // do something on connect
  console.log('NEW SOCKET CONNECTION!');
  // console.log('ON SOCKET CONNECTION HERE WE HAVE', socket);

  socket.on('disconnect', function (something) {
    console.log('A SOCKET DISCONNECTED!');   
  });

});

//routes
app.get('/test', function(req, res) {
  console.log('endpoint responding...');
  res.end('Test');
});

// start server
http.listen(8080, function(data) {
  console.log('server starting...');
});