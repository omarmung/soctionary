import React from 'react'

var Player = (props) => (
	<div className="resultInstance col s6" id={props.id} >
	{props.name ? `User ${props.name} had ${props.votes} votes. ` : null}
	{props.goAgain ?  <button className="btn waves-effect waves-light" onClick={props.goAgain}>Play again?</button> : <img src={props.image}/> }
 
	</div>
	)


export default class Result extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			renderInfo:[]
		}
	}

	componentWillMount() {		


		var info = [];
		socket.on('results', function (data) {
			//time for countdown
			var time = data.time;


			var images = [];
			data.images.forEach( function(blob) {
				var canvas = new fabric.Canvas('test')
				// images.push(blob.vectorDrawing);
				canvas.loadFromJSON( blob.vectorDrawing, function() {
			  		// canvas.renderAll.bind(canvas)
			  		// var blob = JSON.parse(json);
			  		console.log(blob);
			  		var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
						  height: 375
						});
			  		canvas.clear();
					info.push({
						id: 'd' + info.length,
						name:blob.playerName,
						votes:blob.voteCount || 0,
						image: image
						//wins:blob.roundWins 
					})
				})
			})
			info.push({
				id: 'again',
				goAgain:this.goAgain
			})
			this.setState({
				renderInfo: info
			})
			//this.renderDrawings(images)
			socket.removeListener('results');
		}.bind(this))

  	// listen to switch to readyView
  	socket.on('readyView', function () { 
  	  window.location.href = '#/ready' 
  	});

  }

  goAgain() {
  	socket.emit('again');
  }




	render() {
		return (
			<div id="vote" className="row">
				{this.state.renderInfo.map((data) => 
					<Player id={data.id} name = {data.name} votes={data.votes} image={data.image} goAgain={data.goAgain}/>
				)}
			</div>



			)
	}
}