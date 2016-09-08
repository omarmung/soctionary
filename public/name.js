class Name extends React.Component {
	constructor(props) {
		super(props)
	}

	sendName(player) {
		socket.emit('name', player)
	}

	componentWillMount() {
		socket.on('readyView', function () {
			window.location.href = '#/ready'
		});
	} 



	render() {
		return (
				<div class="user-register">
					<input type='text' id='player' placeholder='stumpy the kitty' />
					<button value='Submit' onClick={sendName(document.getElementbyId('player').value)} />

				</div>



			)
	}
}

