var Drawing = require('./Drawing');

exports.addVote = function (req, res) {
  var vote = req.params; // keep eye on
  res.send(200, 'temp success');
  // update drawing vote count - using image.Id as ref
};

exports.retrieveRoundsVotes = function (req, res) {
  var vote = req.params; // keep eye on
/*  Drawing.find({roundId: req.params.roundId // same
    
  });*/
  res.send(200, 'temp success');
};