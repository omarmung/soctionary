import React from 'react'

export default class ready extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		socket.on('countdown',function (animalName) {
			window.Animal = animalName;
			console.log('Ready: ' + window.Animal);
			window.location.href = '#/countdown'
		  //redirect to countdown view
		});
	} 

	start() {
		socket.emit('ready');
	}

	render() {
		return (
		<div>
			<h1> Everyone Ready? </h1>
			<button value="Press this button when everyone is in" onClick={this.start}>Press this button when everyone is ready</button>
		</div>
	
	)}
	}