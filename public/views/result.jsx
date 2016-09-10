import React from 'react'

var Player = (props) => (
	<div id={props.id} >
	{`User ${props.name} had ${props.votes} votes. `}
	</div>
	)


export default class Result extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		var info = [];
		socket.on('results', function (data) {
			//time for countdown
			var time = data.time;


			var images = [];
			data.images.forEach( function(blob) {
				console.log(blob);
				images.push(blob.vectorDrawing);
				info.push({
					id: 'd' + info.length,
					name:blob.playerName,
					votes:blob.votes || 0
					//wins:blob.roundWins 
				})
			})

			this.setState({
				renderInfo: info
			})

  	// listen to switch to readyView
  	socket.on('readyView', function () { 
  	  window.location.href = '#/ready' 
  	});

  }


	renderDrawings(arr){
		// arr.forEach(function(pic) {
			var canvas = new fabric.Canvas('test')
			var imageData = [];
			var count = -1;
			arr.forEach(function(pic) {

			// canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function() {
			//     var image = new Image();
			//     var drawings = document.getElementById('test');
			//     image.src = drawings.toDataUrl("image/png");
			//     document.getElementById('vote').appendChild(image);
			// });

			  	canvas.loadFromJSON( pic, function() {
			  		// canvas.renderAll.bind(canvas)
			  		// var blob = JSON.parse(json);
			  		var image = new Image();

			  		image.src = canvas.toDataURL("image/png");
			  		count++;
			  		var id = 'd' + count;
			  		document.getElementById(id).appendChild(image);
			  		canvas.clear();

			  		//place image on canvas/page appropriately
			  	});
			//canvas.renderAll.bind(canvas)
		// })
				
			})
			canvas.dispose();
			// var parent = document.getElementById("vote");
			// var child = document.getElementById("test");
			// parent.removeChild(child);


	};


	render() {
		return (
			<div>
			  <div>We're all winners.</div>
			  <button value="Just kidding, play again" onClick={this.sendPlayAgain}></button>
			</div>
			)
	}
}