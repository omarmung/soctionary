var mongoose = require('mongoose');

var drawingSchema = mongoose.Schema({
  imageId: {
    type: Number,
    unique: true
  },
  playerId: Number,
  roundId: Number,
  vectorDrawing: String,
  roundVotes: Number // allocate roundVotes after
});

var playerSchema = mongoose.Schema({
  playerId: {
    type: Number,
    unique: true
  },
  playerName: String
});

var Drawing = mongoose.model('Drawing', drawingSchema);
var Player = mongoose.model('Player', playerSchema);

module.exports = Drawing;