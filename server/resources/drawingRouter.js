var drawingRouter = require('express').Router();
var drawingController = require('./drawingController');

drawingRouter.route('/:roundId')
  .get(drawingController.retrieveRoundsDrawings)
  .post(drawingController.addDrawing);

module.exports = drawingRouter;