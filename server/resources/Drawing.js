var mongoose = require('mongoose');

var drawingSchema = mongoose.Schema({
  roundId: Number,
  vectorDrawing: String,
  playerName: String,
  voteCount: 0
});

var Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;