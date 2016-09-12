var mongoose = require('mongoose');

var drawingSchema = mongoose.Schema({
  roundId: Number,
  vectorDrawing: String,
  playerName: {type: String,unique:true},
  voteCount: Number
});


var Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;