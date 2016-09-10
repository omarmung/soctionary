import React from 'react'
var Board = () => (
	<div>
		<canvas id="canvas" width="375" height="375"></canvas>
		</div>
	)


export default class Drawing extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			drawCanvas: false,
			countdown: 4
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

		this.setState({
			countdown: setInterval(function() {
				
			}.bind(this),1000)
		})
	}



	countdown() {
		document.getElementsByClassName('countdown')[0].style.display = 'none';
	}

	render() {
		return (
			<div>
			<div className="prompt">Draw a {window.Animal}</div>
			<div className="countdown"> Start drawing in {this.state.countdown ? this.countdown : this.state.countdown}</div>
			{this.state.drawCanvas ? <Board /> : null}
			</div>

			)
	}
}





