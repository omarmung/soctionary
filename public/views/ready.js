class ready extends React.Component {
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
		<div>
			<h1> Everyone Ready? </h1>
			<button value="Press this button when everyone is in" onClick={this.start}></button>

		</div>

		
	)}
	}