var Drawing = require('./Drawing');

exports.addDrawing = function (req, res) {
  console.log('receiving addReq @ this endpoint!');
  var drawing = req.params; // note: this will change based on how we receive drawing
  var newDrawing = new Drawing ({
    imageId: drawing.imageId,
    userName: drawing.userName,
    roundId: drawing.roundId
  }).save(function (err) {
    if (err) {
      console.log(err);
    }
  }); 
  Drawing.find({imageId: drawing.imageId}, 'imageId userName roundId', function (err, drawing) {
    if (err) {
      console.error(err); 
    } else {
      res.json(drawing);
    }
  });
};

exports.retrieveRoundsDrawings = function (req, res) {
  console.log('receiving getReq @ this endpoint!');
  Drawing.find({roundId: req.params.roundId /*note: this ref may change based on how we are receiving the data from client*/}, function (err, drawing) {
    if (err) {
      console.log(err);
    } else {
      res.json(drawing); // method of send will be later determined.. may pivot from json
    }
  });
};