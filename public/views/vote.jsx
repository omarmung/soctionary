import React from 'react'

//show prompt for thing
var Select = (props) => (
	<div id={props.id} value={props.name} onClick={() => props.voting(props.id)}>
	</div>
	)

//voted is the id tag for the current voted drawing

export default class Vote extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			renderInfo: []

		}
	}

	componentWillMount() {
		var info = [];
		socket.on('vote', function (data) {
			//time for countdown
			var time = data.time;
			console.log('data',data)
			var images = [];
			data.images.forEach( function(blob) {
				images.push(blob.vectorDrawing);
				info.push({
					id: 'd' + info.length,
					name:blob.playerName 
				})
			})


			this.setState({
				renderInfo: info
			})
			console.log(this.state.renderInfo)

		  // redirect to voting view
		  // images is an array of JSON.stringify(canvas) objects to vote on
		  this.renderDrawings(images);



		}.bind(this));

		socket.on('countVotes', function()  {
			//Emit name voted on to server.
			console.log('name',this.getVotedName());
			socket.emit('vote', this.getVotedName())
			window.location.href = '#/result' 
		}.bind(this))


	} 



	getVotedName() {

		if (document.getElementsByClassName('voted')[0]) {
	   return document.getElementsByClassName('voted')[0].getAttribute('value');
		} else {
     return null;
		}
	}


	voting(id) {
		if(document.getElementsByClassName('voted')[0]) {
			document.getElementsByClassName('voted')[0].classList.remove("voted")
		}
		document.getElementById(id).className += "voted"
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

			  		image.src = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
						  height: 375
						});
			  		count++;
			  		var id = 'd' + count;
			  		document.getElementById(id).appendChild(image);
			  		canvas.clear();

			  		//place image on canvas/page appropriately
			  	});
			//canvas.renderAll.bind(canvas)
		// })
				
			})
			// var parent = document.getElementById("vote");
			// var child = document.getElementById("test");
			// parent.removeChild(child);

	}


	render() {
		//Need to decide if we use one big canvas, or just render images of all the drawings
		return (
			<div id="vote">
				{this.state.renderInfo.map((data) => 
					<Select id={data.id} name = {data.name} voting={this.voting.bind(this)}/>
				)}

			</div>



			)
	}
}