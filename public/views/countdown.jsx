import React from 'react'

export default class countdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			countDown: 4
		}
	}

	componentWillMount() {
		socket.on('draw',function() { 
			window.location.href = '#/drawing'
		  //redirect to draw view
		});
	}


  componentDidMount() {
		// this.startCounter(3);
		console.log('Countdown: ' + window.Animal);
		// this.setState({
		// 	countDown: 3
		// });

  }

	// startCounter(counter) {
 //    var counter = counter;

 //    var startCounting = function() {
 //    	setTimeout(function() {
 //    	  countDown(counter);
 //    	}, 1000).bind(this);
 //    	this.setState({
	// 			countDown: counter
	// 		});
 //    }

 //    var countDown = function(counter) {
 //    	counter = counter - 1;
 //    	this.setState({
	// 			countDown: counter
	// 		});
	// 		if (counter === 0) {
	// 			clearTimeout(timer).bind(this);
	// 			timer = null;
	// 		} else {
	// 			timer = setTimeout(function() {
	// 			  countDown();
	// 			  console.log('Countdown: ' + counter);
	// 			}, 1000).bind(this);
	// 		}

 //    }
 //    startCounting();
	// }

	render() {
		return (
		<div>
		  <div className='prompt'>Draw a { window.Animal } in... </div>
			<div className='countdown'>{ this.state.countDown }</div>
		</div>
	
	)}
	}