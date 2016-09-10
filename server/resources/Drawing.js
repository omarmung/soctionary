var mongoose = require('mongoose');

var drawingSchema = mongoose.Schema({
  roundId: Number,
  vectorDrawing: String,
  playerName: String,
  voteCount: Number
});


var Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;