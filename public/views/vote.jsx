import React from 'react'

//show prompt for thing
var Select = (props) => (
	<div className="voteInstance" id={props.id} value={props.name} onClick={() => props.voting(props.id)}>
		<img src={props.image}/>
	</div>
	)

//voted is the id tag for the current voted drawing

export default class Vote extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			renderInfo: [],
			remainingTime: 10

		}
	}

	componentDidMount() {
  document.getElementsByClassName('votingCountdown')[0].style.display = 'none';
  document.getElementsByClassName('waitTime')[0].style.display = 'inline';

	// componentWillUnmount() {
	// 	clearInterval(this.timer);
	}

  tick() {
  	this.setState({remainingTime: this.state.remainingTime - 1});
  	console.log('tick: ' + this.state.remainingTime);
    if (this.state.remainingTime <= 1) {
    	clearInterval(this.timer);
    	this.setState({remainingTime: '!'});
    	setTimeout(this.hideCountDown.bind(this), 1000);
      ;
    }
  }

	hideCountDown() {
		document.getElementsByClassName('votingCountdown')[0].style.display = 'none';
	}

	componentWillMount() {
		var info = [];
		socket.on('vote', function (data) {
			//time for countdown
			var time = data.time;
			this.setState({remainingTime: time});
			var canvas = new fabric.Canvas('test')
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

		  // redirect to voting view
		  // images is an array of JSON.stringify(canvas) objects to vote on
		  //this.renderDrawings(images);
  
    	console.log('vote countdown started...');
    	this.timer = setInterval(this.tick.bind(this), 1000);
    	document.getElementsByClassName('votingCountdown')[0].style.display = 'inline';
  	  document.getElementsByClassName('waitTime')[0].style.display = 'none';
      
		}.bind(this));

		socket.on('countVotes', function()  {
			//Emit name voted on to server.
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
			var vote = document.getElementsByClassName('voted')[0].id
			document.getElementsByClassName('voted')[0].classList.remove("voted")
			document.getElementById(vote).className += "voteInstance" 
		}
		document.getElementById(id).classList.remove("voteInstance")
		document.getElementById(id).className += "voted"
	}


	render() {
		//Need to decide if we use one big canvas, or just render images of all the drawings
		return (
			<div id="vote" className="row">
			  <div className='waitTime'><p>Loading...</p> <img src="stumpy-loading.gif"/> </div>
			  <div className='votingCountdown valign'>
			  	<div className="votePrompt">Pick your favorite!</div>
			  	<div className="voteCountdown"> {this.state.remainingTime} </div>
			  </div>
				{this.state.renderInfo.map((data) => 
					<Select id={data.id} name = {data.name} voting={this.voting.bind(this)} image={data.image}/>
				)}

			</div>



			)
	}
}