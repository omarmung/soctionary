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
			remainingTime: 4
		}
	}

	componentWillMount() {
		this.setState({
			drawCanvas: false
		})

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

			socket.on('end', function () {
			  //send image to server

			  socket.emit('image', image); 
			  window.location.href = '#/vote' 
			}.bind(this));
		}.bind(this));


		// start the countdown
		// this.countDown();
		
	}

	componentDidMount() {
		console.log('countdown started...');
		this.timer = setInterval(this.tick.bind(this), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

  tick() {
  	this.setState({remainingTime: this.state.remainingTime - 1});
  	console.log('tick: ' + this.state.remainingTime);
    if (this.state.remainingTime <= 1) {
    	clearInterval(this.timer);
    	this.setState({remainingTime: 'Draw!'});
    	setTimeout(this.hideCountDown.bind(this), 1000);
      ;
    }
  }

	hideCountDown() {
		document.getElementsByClassName('drawingCountdown')[0].style.display = 'none';
	}

	render() {
		return (
			<div>
				<div className='drawingCountdown valign'>
					<div className="prompt">Draw a {window.Animal} in...</div>
					<div className="countdown"> {this.state.remainingTime} </div>
				</div>
				{this.state.drawCanvas ? <Board /> : null}
			</div>

			)
	}
}
