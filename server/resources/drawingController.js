var Drawing = require('./Drawing');

exports.addDrawing = function (drawing) {
  console.log(drawing);
  var newDrawing = new Drawing ({
    playerName: drawing.playerName,
    roundId: drawing.roundId,
    vectorDrawing: drawing.vectorDrawing
  }).save(function (err) {
    if (err) {
      console.log(err);
    }
  }); 
};

exports.retrieveRoundsDrawings = function (round, cb) {
  console.log('receiving getReq @ this endpoint!');
  Drawing.find({roundId: round}, function (err, drawing) {
    if (err) {
      console.log(err);
    } else {
      cb(drawing);
    }
  });
};