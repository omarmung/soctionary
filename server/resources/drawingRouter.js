var drawingRouter = require('express').Router();
var drawingController = require('./drawingController');
var voteController = require('./voteController');

drawingRouter.route('/:roundId')
  .get(drawingController.retrieveRoundsDrawings)
  .post(drawingController.addDrawing);

drawingRouter.route('/vote/:roundId')
  .get(voteController.retrieveRoundsVotes)
  .post(voteController.addVote);

module.exports = drawingRouter;