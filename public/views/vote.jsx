import React from 'react'

export default class Vote extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		socket.on('vote', function (images) {
		  //redirect to voting view
		  // images is an array of JSON.stringify(canvas) objects to vote on
		  this.renderDrawings(images);
		});
	}

	renderDrawings(arr){
		arr.forEach(function(pic) {

		  	canvas.loadFromJSON( pic, function(blob) {
		  		var image = new Image();
		  		image.src = blob.toDataUrl("image/png");
		  		document.getElementById('vote').appendChild(image);

		  		//place image on canvas/page appropriately
		  	});
			//canvas.renderAll.bind(canvas)
		})

	};

	render() {
		//Need to decide if we use one big canvas, or just render images of all the drawings
		return (
			<div id="vote">
			</div>



			)
	}
}

