import React from 'react'

export default class Result extends React.Component {
	constructor(props) {
		super(props)
	}

  componentWillMount() {

  	// listen to switch to readyView
  	socket.on('readyView', function () { 
  	  window.location.href = '#/ready' 
  	});

  }

  sendPlayAgain() {
  	// emit event to server
	  socket.emit('again');
  }

	render() {
		return (
			<div>
			  <div>We're all winners.</div>
			  <button value="Just kidding, play again" onClick={this.sendPlayAgain}></button>
			</div>
			)
	}
}