'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//component used to show possible pictures to vote on
var Select = function Select(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'voteInstance', id: props.id, value: props.name, onClick: function onClick() {
				return props.voting(props.id);
			} },
		_react2.default.createElement('img', { src: props.image })
	);
};
//voted is the class tag for the current voted drawing

var Vote = function (_React$Component) {
	_inherits(Vote, _React$Component);

	function Vote(props) {
		_classCallCheck(this, Vote);

		var _this = _possibleConstructorReturn(this, (Vote.__proto__ || Object.getPrototypeOf(Vote)).call(this, props));

		_this.state = {
			renderInfo: [],
			remainingTime: 10

		};
		return _this;
	}

	_createClass(Vote, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//used to show and hide loading screen
			document.getElementsByClassName('votingCountdown valign')[0].style.display = 'none';
			document.getElementsByClassName('waitTime')[0].style.display = 'inline';
		}

		//Used to create countdown for voting view

	}, {
		key: 'tick',
		value: function tick() {
			for (var i = 0; i < this.state.remainingTime; i++) {
				setTimeout(function () {
					this.setState({ remainingTime: this.state.remainingTime - 1 });
				}.bind(this), i * 1000);
			}
		}

		//The process to render images from blob data is this:  all the blobs for one picture get drawn on a virutal canvas;
		//Then, we take that canvas, and we get a image url for the entire picture;
		//Then, we pass the url to an img tag in the Select component to render the image.


	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var info = [];

			socket.on('vote', function (data) {
				//time for countdown
				var time = data.time;
				//sets up countdown time passed from server
				this.setState({ remainingTime: time + 1 });
				var canvas = new fabric.Canvas('test');
				//var images = [];
				data.images.forEach(function (blob) {
					canvas.loadFromJSON(blob.vectorDrawing, function () {
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
							name: blob.playerName,
							image: image
						});
						canvas.clear();
					});
				});
				console.log('info', info);
				//Used to pass info to Select component
				this.setState({
					renderInfo: info
				});

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				//this.renderDrawings(images);

				console.log('vote countdown started...');
				//Starts the countdown timer
				setTimeout(this.tick.bind(this), 0);
				document.getElementsByClassName('votingCountdown')[0].style.display = 'inline';
				document.getElementsByClassName('waitTime')[0].style.display = 'none';
			}.bind(this));

			socket.on('countVotes', function () {
				//Emit name voted on to server.
				socket.emit('vote', this.getVotedName());
				socket.removeListener('countVotes');
				window.location.href = '#/result';
			}.bind(this));
		}
	}, {
		key: 'getVotedName',
		value: function getVotedName() {
			//Used to get the name of the element with voted class
			if (document.getElementsByClassName('voted')[0]) {
				return document.getElementsByClassName('voted')[0].getAttribute('value');
			} else {
				return null;
			}
		}
	}, {
		key: 'voting',
		value: function voting(id) {
			//Used to prevent one from voting on more than one, and lets you vote
			if (document.getElementsByClassName('voted')[0]) {
				var vote = document.getElementsByClassName('voted')[0].id;
				document.getElementsByClassName('voted')[0].classList.remove("voted");
				document.getElementById(vote).className += "voteInstance";
			}
			document.getElementById(id).classList.remove("voteInstance");
			document.getElementById(id).className += "voted";
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return (
				//Most of the classNames here are used for css.
				_react2.default.createElement(
					'div',
					{ id: 'vote', className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'waitTime' },
						' ',
						_react2.default.createElement('img', { className: 'loadingStump', src: 'stumpy-loading.gif' }),
						' ',
						_react2.default.createElement(
							'p',
							{ className: 'loadingText' },
							'Loading...'
						),
						' '
					),
					_react2.default.createElement(
						'div',
						{ className: 'votingCountdown valign' },
						_react2.default.createElement(
							'div',
							{ className: 'votePrompt' },
							'Pick your favorite!'
						),
						_react2.default.createElement(
							'div',
							{ className: 'voteCountdown' },
							' ',
							this.state.remainingTime,
							' '
						)
					),
					this.state.renderInfo.map(function (data) {
						return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2), image: data.image });
					})
				)
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,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Qiw2Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBSSxvQkFBbEMsR0FBM0I7QUFBQTtBQUFvRjtBQUFBO0FBQUEsU0FBRyxXQUFVLGFBQWI7QUFBQTtBQUFBLE9BQXBGO0FBQUE7QUFBQSxNQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSx3QkFBZjtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsWUFBZjtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQSxTQUFLLFdBQVUsZUFBZjtBQUFBO0FBQWlDLFlBQUssS0FBTCxDQUFXLGFBQTVDO0FBQUE7QUFBQTtBQUZELE1BRkY7QUFNRSxVQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEdBQXRCLENBQTBCLFVBQUMsSUFBRDtBQUFBLGFBQzFCLDhCQUFDLE1BQUQsSUFBUSxJQUFJLEtBQUssRUFBakIsRUFBcUIsTUFBUSxLQUFLLElBQWxDLEVBQXdDLFFBQVEsT0FBSyxNQUFMLENBQVksSUFBWixRQUFoRCxFQUF3RSxPQUFPLEtBQUssS0FBcEYsR0FEMEI7QUFBQSxNQUExQjtBQU5GO0FBRkQ7QUFpQkE7Ozs7RUE5SGdDLGdCQUFNLFM7O2tCQUFuQixJIiwiZmlsZSI6InZvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vY29tcG9uZW50IHVzZWQgdG8gc2hvdyBwb3NzaWJsZSBwaWN0dXJlcyB0byB2b3RlIG9uXG52YXIgU2VsZWN0ID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwidm90ZUluc3RhbmNlXCIgaWQ9e3Byb3BzLmlkfSB2YWx1ZT17cHJvcHMubmFtZX0gb25DbGljaz17KCkgPT4gcHJvcHMudm90aW5nKHByb3BzLmlkKX0+XG5cdFx0PGltZyBzcmM9e3Byb3BzLmltYWdlfS8+XG5cdDwvZGl2PlxuXHQpXG4vL3ZvdGVkIGlzIHRoZSBjbGFzcyB0YWcgZm9yIHRoZSBjdXJyZW50IHZvdGVkIGRyYXdpbmdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86IFtdLFxuXHRcdFx0cmVtYWluaW5nVGltZTogMTBcblxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdC8vdXNlZCB0byBzaG93IGFuZCBoaWRlIGxvYWRpbmcgc2NyZWVuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGluZ0NvdW50ZG93biB2YWxpZ24nKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YWl0VGltZScpWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0fVxuXG4vL1VzZWQgdG8gY3JlYXRlIGNvdW50ZG93biBmb3Igdm90aW5nIHZpZXdcbiAgdGljaygpIHtcbiAgXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWU7IGkrKykge1xuICBcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICBcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6IHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSAtIDF9KTtcbiAgXHRcdFx0fS5iaW5kKHRoaXMpLCBpKjEwMDApO1xuICBcdFx0fVxuXG4gIH1cblxuLy9UaGUgcHJvY2VzcyB0byByZW5kZXIgaW1hZ2VzIGZyb20gYmxvYiBkYXRhIGlzIHRoaXM6ICBhbGwgdGhlIGJsb2JzIGZvciBvbmUgcGljdHVyZSBnZXQgZHJhd24gb24gYSB2aXJ1dGFsIGNhbnZhcztcbi8vVGhlbiwgd2UgdGFrZSB0aGF0IGNhbnZhcywgYW5kIHdlIGdldCBhIGltYWdlIHVybCBmb3IgdGhlIGVudGlyZSBwaWN0dXJlO1xuLy9UaGVuLCB3ZSBwYXNzIHRoZSB1cmwgdG8gYW4gaW1nIHRhZyBpbiB0aGUgU2VsZWN0IGNvbXBvbmVudCB0byByZW5kZXIgdGhlIGltYWdlLlxuXG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHZhciBpbmZvID0gW107XG5cblx0XHRzb2NrZXQub24oJ3ZvdGUnLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Ly90aW1lIGZvciBjb3VudGRvd25cblx0XHRcdHZhciB0aW1lID0gZGF0YS50aW1lO1xuXHRcdFx0Ly9zZXRzIHVwIGNvdW50ZG93biB0aW1lIHBhc3NlZCBmcm9tIHNlcnZlclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogdGltZSArIDF9KTtcblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHQvL3ZhciBpbWFnZXMgPSBbXTtcblx0XHRcdGRhdGEuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdCAgXHRjYW52YXMubG9hZEZyb21KU09OKCBibG9iLnZlY3RvckRyYXdpbmcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ICBcdFx0Ly91c2VkIHRvIGdldCBkYXRhIHVybCBmb3IgaW1hZ2UgdG8gcmVuZGVyIG9uIHZvdGluZyB2aWV3XG5cdFx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGllcjogMC4yNSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM3NSxcblx0XHRcdFx0XHRcdCAgaGVpZ2h0OiAzNzVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0ICBcdFx0Ly9pbmZvIGFycmF5IGlzIGEgc3RhdGUgdGhhdCBnZXQgcGFzc2VkIGludG8gdGhlIFNlbGVjdCBjb21wb25lbnQgdGhhdCB3aWxsIHJlbmRlciB0aGUgcGljdHVyZXNcblx0XHRcdFx0XHRpbmZvLnB1c2goe1xuXHRcdFx0XHRcdFx0aWQ6ICdkJyArIGluZm8ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bmFtZTpibG9iLnBsYXllck5hbWUsIFxuXHRcdFx0XHRcdFx0aW1hZ2U6IGltYWdlXG5cdFx0XHRcdFx0fSlcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXHRcdFx0ICBcdH0pXG5cdFx0XHR9KVxuIFx0XHRcdGNvbnNvbGUubG9nKCdpbmZvJywgaW5mbyk7XG4gXHRcdFx0Ly9Vc2VkIHRvIHBhc3MgaW5mbyB0byBTZWxlY3QgY29tcG9uZW50XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cmVuZGVySW5mbzogaW5mb1xuXHRcdFx0fSlcblxuXHRcdCAgLy8gcmVkaXJlY3QgdG8gdm90aW5nIHZpZXdcblx0XHQgIC8vIGltYWdlcyBpcyBhbiBhcnJheSBvZiBKU09OLnN0cmluZ2lmeShjYW52YXMpIG9iamVjdHMgdG8gdm90ZSBvblxuXHRcdCAgLy90aGlzLnJlbmRlckRyYXdpbmdzKGltYWdlcyk7XG4gIFxuICAgIFx0Y29uc29sZS5sb2coJ3ZvdGUgY291bnRkb3duIHN0YXJ0ZWQuLi4nKTtcbiAgICBcdC8vU3RhcnRzIHRoZSBjb3VudGRvd24gdGltZXJcbiAgICBcdHNldFRpbWVvdXQodGhpcy50aWNrLmJpbmQodGhpcyksMCk7XG4gICAgXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RpbmdDb3VudGRvd24nKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gIFx0ICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2FpdFRpbWUnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgXG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHNvY2tldC5vbignY291bnRWb3RlcycsIGZ1bmN0aW9uKCkgIHtcblx0XHRcdC8vRW1pdCBuYW1lIHZvdGVkIG9uIHRvIHNlcnZlci5cblx0XHRcdHNvY2tldC5lbWl0KCd2b3RlJywgdGhpcy5nZXRWb3RlZE5hbWUoKSlcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignY291bnRWb3RlcycpXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3Jlc3VsdCcgXG5cdFx0fS5iaW5kKHRoaXMpKVxuXHR9IFxuXG5cblx0Z2V0Vm90ZWROYW1lKCkge1xuXHRcdC8vVXNlZCB0byBnZXQgdGhlIG5hbWUgb2YgdGhlIGVsZW1lbnQgd2l0aCB2b3RlZCBjbGFzc1xuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdCAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHR9IGVsc2Uge1xuICAgICByZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXG5cdHZvdGluZyhpZCkge1xuXHRcdC8vVXNlZCB0byBwcmV2ZW50IG9uZSBmcm9tIHZvdGluZyBvbiBtb3JlIHRoYW4gb25lLCBhbmQgbGV0cyB5b3Ugdm90ZVxuXHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0pIHtcblx0XHRcdHZhciB2b3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5pZFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwidm90ZWRcIilcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZvdGUpLmNsYXNzTmFtZSArPSBcInZvdGVJbnN0YW5jZVwiIFxuXHRcdH1cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LnJlbW92ZShcInZvdGVJbnN0YW5jZVwiKVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc05hbWUgKz0gXCJ2b3RlZFwiXG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly9Nb3N0IG9mIHRoZSBjbGFzc05hbWVzIGhlcmUgYXJlIHVzZWQgZm9yIGNzcy5cblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCIgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPSd3YWl0VGltZSc+IDxpbWcgY2xhc3NOYW1lPVwibG9hZGluZ1N0dW1wXCIgc3JjPVwic3R1bXB5LWxvYWRpbmcuZ2lmXCIvPiA8cCBjbGFzc05hbWU9XCJsb2FkaW5nVGV4dFwiPkxvYWRpbmcuLi48L3A+IDwvZGl2PlxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT0ndm90aW5nQ291bnRkb3duIHZhbGlnbic+XG5cdFx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJ2b3RlUHJvbXB0XCI+UGljayB5b3VyIGZhdm9yaXRlITwvZGl2PlxuXHRcdFx0ICBcdDxkaXYgY2xhc3NOYW1lPVwidm90ZUNvdW50ZG93blwiPiB7dGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lfSA8L2Rpdj5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8U2VsZWN0IGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90aW5nPXt0aGlzLnZvdGluZy5iaW5kKHRoaXMpfSBpbWFnZT17ZGF0YS5pbWFnZX0vPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufSJdfQ==