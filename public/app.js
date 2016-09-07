var canvas = new fabric.Canvas('canvas');

// Rectangle example
// var rect = new fabric.Rect({
//     top : 100,
//     left : 100,
//     width : 60,
//     height : 70,
//     fill : 'red'
// });

// canvas.add(rect);

// start drawing mode
var canvas = new fabric.Canvas('canvas', {
  isDrawingMode: true
});

canvas.on('path:created', function(options) {
  console.log( JSON.stringify(canvas) );
  // console.log(options.e.clientX, options.e.clientY);
});

