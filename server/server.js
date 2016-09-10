var express = require('express');  
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var db = require('./db');
var drawingController = require('./resources/drawingController');
var port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/../public'));
app.use('/static', express.static(__dirname + '/../public/node_modules/fabric/dist'));

var animals = [
  'penguin',
  'turtle',
  'butterfly',
  'dragonfly',
  'frog',
  'monkey',
  'shark',
  'fish',
  'bird',
  'elephant',
  'dolphin',
  'dog',
  'horse',
  'bunny',
  'snail',
  'mouse',
  'seal',
  'pig',
  'cow',
  'turkey',
  'camel',
  'cat',
  'rhino',
  'bear',
  'spider',
  'ant',
  'caterpillar',
  'porcupine',
  'anteater'
];

var clients = {};
var rounds = 0;
var queried = false;
var images;

io.on('connection', function(socket) {
  
  socket.on('name', function (name) {
    socket.name = name;
    clients[name] = 0;
    socket.emit('readyView');
  });

  socket.on('ready', function () {
    io.emit('countdown', animals[Math.floor(Math.random() * animals.length)]);
    setTimeout(function () {
      io.emit('draw');
      setTimeout(function () {
        io.emit('end');
      }, 5000);
    }, 4000);
  });
  
  socket.on('image', function (data) {
    
    drawingController.addDrawing({
      playerName: socket.name,
      roundId: rounds,
      vectorDrawing: data
    });
    
    setTimeout(function () {
      if (!queried) {
        drawingController.retrieveRoundsDrawings(rounds, function (data) {
          images = data;
          var time = Math.max(10, clients.length * 2)
          io.emit('vote', {
            images: images,
            time: time
          });
          setTimeout(function () {
            io.emit('countVotes');
          }, time * 1000);
        });
        queried = true;
      }
      
    }, 4000);
     
  });
      
  socket.on('vote', function (name) {
    clients[name]++;
    
    setTimeout(function () {
      for (var i = 0; i < images.length; i++) {
        images[i].votes = clients[images[i][name]];
      }
      socket.emit('results', {
        images: images,
        playerName: socket.name,
        rounds: rounds,
        wins: null
      });
    }, 1000);
    
  });

  socket.on('again', function () {
    rounds++;
    queried = false;
    io.emit('readyView');
  });

  socket.on('disconnect', function (something) {
    console.log('A SOCKET DISCONNECTED!');
    delete clients[socket.name];
  });

});


http.listen(port, function(data) {
  console.log('listening on ' + port);

});