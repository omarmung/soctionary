// requires
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// var db = require('../db');
var drawingRouter = require('./resources/drawingRouter');
var path = require('path');

// static routes
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/../public'));
app.use('/static', express.static(__dirname + '/../public/bower_components/fabric.js/dist'));
app.use('/api/drawings', drawingRouter);

var animals = [];

var clients = {};

io.on('connection', function(socket) {
  // do something on connect
  console.log('NEW SOCKET CONNECTION!', socket);
  
  socket.on('name', function (name) {
    socket.name = name;
    clients[name] = 0;
    io.emit('readyView');
  });
  
// io.sockets.on('connect', function(client) {
//     clients[client.name] = 0; 
//     client.on('disconnect', function() {
//       delete clients.client;
//     });
    
// });

  socket.on('ready', function () {
    var animal = animals[Math.floor(Math.random() * animals.length)]
    io.sockets.emit('countdown', animal);
    socket.on('')
    setTimeout(function () {
      io.emit('draw');
      setTimeout(function () {
        io.emit('end');
      }, 5000);
    }, 3000);
  });
  
  socket.on('image', function (data) {
    // convert to image and save in db
      /* when all imgs in db */
      io.emit('vote', images);
      setTimeout(function () {
        var winner = {
          votes: 0,
          name: ''        
        }
        for (var name in clients) {
          if (clients[name] > winner.votes) {
            winner.name = name;
            winner.votes = clients[name];
          }
        }
        io.emit('results', winner);
      }, Math.max(10000, clients.length * 2000));
  });
  
  socket.on('vote', function (name) {
    clients[name]++;
  });
  // socket.on('draw', function (data) {
  //   io.emit('draw', data);
  //   console.log(data);
  // });
  // console.log('ON SOCKET CONNECTION HERE WE HAVE', socket);

  socket.on('again', function () {
    io.emit('readyView');
  });

  socket.on('disconnect', function (something) {
    console.log('A SOCKET DISCONNECTED!');
    delete clients[socket.name];   
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