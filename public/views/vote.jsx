import React from 'react'

//show prompt for thing
var Select = (props) => (
	<div id={props.id} value={props.name} onClick={() => props.voting(props.id)}>
		<img src={props.image}/>
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
			var canvas = new fabric.Canvas('test')
			console.log('data',data)
			//var images = [];
			data.images.forEach( function(blob) {
				//images.push(blob.vectorDrawing);
			  	canvas.loadFromJSON( blob.vectorDrawing, function() {


			  		var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
						  height: 375
						});
					info.push({
						id: 'd' + info.length,
						name:blob.playerName, 
						image: image
					})
			  		canvas.clear();
			  	})
			})
 
			this.setState({
				renderInfo: info
			})
			console.log('render images',this.state.renderInfo)

		  // redirect to voting view
		  // images is an array of JSON.stringify(canvas) objects to vote on
		  //this.renderDrawings(images);



		}.bind(this));

		socket.on('countVotes', function()  {
			//Emit name voted on to server.
			console.log('name',this.getVotedName());
			socket.emit('vote', this.getVotedName())
			socket.removeListener('countVotes')
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


	render() {
		//Need to decide if we use one big canvas, or just render images of all the drawings
		return (
			<div id="vote">
				{this.state.renderInfo.map((data) => 
					<Select id={data.id} name = {data.name} voting={this.voting.bind(this)} image={data.image}/>
				)}

			</div>



			)
	}
}