import React from 'react'
var Board = () => (
	<div>
		<canvas id="canvas" width="1400" height="480"></canvas>
		</div>
	)

export default class Drawing extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			drawCanvas: false
		}
	}

	componentWillMount() {

		// create canvas
		var image = null;

		socket.on('draw', function () {

			this.setState({
				drawCanvas: true
			})

			var canvas = new fabric.Canvas('canvas', {
			  isDrawingMode: true
			});

			// set brush size
			canvas.freeDrawingBrush.width = 10;

		  //redirect to draw view
		  canvas.on('path:created', function(options) {
		    image = JSON.stringify(canvas);
		    // console.log('Saving drawing to image variable...');
		    // console.log(JSON.stringify(canvas));
		  });
		}.bind(this));

		socket.on('end', function () {
		  //send image to server
		  socket.emit('image', image); 
		  window.location.href = '#/vote' 
		});
	}



	render() {
		return (
			<div>
			<h1>{window.Animal}</h1>
			{this.state.drawCanvas ? <Board /> : null}
			</div>

			)
	}
}





