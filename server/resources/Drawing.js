var mongoose = require('mongoose');

var drawingSchema = mongoose.Schema({
  imageId: {
    type: Number,
    unique: true
  },
  userName: String,
  roundId: String
});

var Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;