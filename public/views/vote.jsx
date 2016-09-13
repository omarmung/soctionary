import React from 'react'

//component used to show possible pictures to vote on
var Select = (props) => (
	<div className="voteInstance" id={props.id} value={props.name} onClick={() => props.voting(props.id)}>
		<img src={props.image}/>
	</div>
	)
//voted is the class tag for the current voted drawing

export default class Vote extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			renderInfo: [],
			remainingTime: 10

		}
	}

	componentDidMount() {
		//used to show and hide loading screen
  document.getElementsByClassName('votingCountdown valign')[0].style.display = 'none';
  document.getElementsByClassName('waitTime')[0].style.display = 'inline';
	}

//Used to create countdown for voting view
  tick() {
  		for(var i = 0; i < this.state.remainingTime; i++) {
  			setTimeout(function() {
  				this.setState({remainingTime: this.state.remainingTime - 1});
  			}.bind(this), i*1000);
  		}

  }

//The process to render images from blob data is this:  all the blobs for one picture get drawn on a virutal canvas;
//Then, we take that canvas, and we get a image url for the entire picture;
//Then, we pass the url to an img tag in the Select component to render the image.


	componentWillMount() {
		var info = [];

		socket.on('vote', function (data) {
			//time for countdown
			var time = data.time;
			//sets up countdown time passed from server
			this.setState({remainingTime: time + 1});
			var canvas = new fabric.Canvas('test')
			//var images = [];
			data.images.forEach( function(blob) {
			  	canvas.loadFromJSON( blob.vectorDrawing, function() {
			  		//used to get data url for image to render on voting view
			  		var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
						  height: 375
						});
			  		//info array is a state that get passed into the Select component that will render the pictures
					info.push({
						id: 'd' + info.length,
						name:blob.playerName, 
						image: image
					})
			  		canvas.clear();
			  	})
			})
 			console.log('info', info);
 			//Used to pass info to Select component
			this.setState({
				renderInfo: info
			})

		  // redirect to voting view
		  // images is an array of JSON.stringify(canvas) objects to vote on
		  //this.renderDrawings(images);
  
    	console.log('vote countdown started...');
    	//Starts the countdown timer
    	setTimeout(this.tick.bind(this),0);
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
		//Used to get the name of the element with voted class
		if (document.getElementsByClassName('voted')[0]) {
	   return document.getElementsByClassName('voted')[0].getAttribute('value');
		} else {
     return null;
		}
	}


	voting(id) {
		//Used to prevent one from voting on more than one, and lets you vote
		if(document.getElementsByClassName('voted')[0]) {
			var vote = document.getElementsByClassName('voted')[0].id
			document.getElementsByClassName('voted')[0].classList.remove("voted")
			document.getElementById(vote).className += "voteInstance" 
		}
		document.getElementById(id).classList.remove("voteInstance")
		document.getElementById(id).className += "voted"
	}


	render() {
		return (
			//Most of the classNames here are used for css.
			<div id="vote" className="row">
			  <div className='waitTime'> <img className="loadingStump" src="stumpy-loading.gif"/> <p className="loadingText">Loading...</p> </div>
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