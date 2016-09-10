import React from 'react'

export default class ready extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		socket.on('countdown',function (animalName) {
			window.Animal = animalName;
			window.location.href = '#/drawing'
		  //redirect to countdown view
		});
	} 

	start() {
		socket.emit('ready');
	}

	render() {
		return (
		<div className="readyScreen">
			<h1 className="tlt"> Everyone Ready? </h1>
			<button className="btn waves-effect waves-light" value="Press this button when everyone is in" onClick={this.start}>Press this button when everyone is ready</button>
		</div>
	
	)}
	}