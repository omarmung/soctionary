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

//show prompt for thing
var Select = function Select(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'voteInstance', id: props.id, value: props.name, onClick: function onClick() {
				return props.voting(props.id);
			} },
		_react2.default.createElement('img', { src: props.image })
	);
};

//voted is the id tag for the current voted drawing

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
			document.getElementsByClassName('votingCountdown')[0].style.display = 'none';
			document.getElementsByClassName('waitTime')[0].style.display = 'inline';

			// componentWillUnmount() {
			// 	clearInterval(this.timer);
		}
	}, {
		key: 'tick',
		value: function tick() {
			this.setState({ remainingTime: this.state.remainingTime - 1 });
			console.log('tick: ' + this.state.remainingTime);
			if (this.state.remainingTime <= 1) {
				clearInterval(this.timer);
				this.setState({ remainingTime: '!' });
				setTimeout(this.hideCountDown.bind(this), 1000);
				;
			}
		}
	}, {
		key: 'hideCountDown',
		value: function hideCountDown() {
			document.getElementsByClassName('votingCountdown')[0].style.display = 'none';
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var info = [];
			socket.on('vote', function (data) {
				//time for countdown
				var time = data.time;
				this.setState({ remainingTime: time });
				var canvas = new fabric.Canvas('test');
				//var images = [];
				data.images.forEach(function (blob) {
					//images.push(blob.vectorDrawing);
					canvas.loadFromJSON(blob.vectorDrawing, function () {

						var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
							height: 375
						});
						info.push({
							id: 'd' + info.length,
							name: blob.playerName,
							image: image
						});
						canvas.clear();
					});
				});

				this.setState({
					renderInfo: info
				});

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				//this.renderDrawings(images);

				console.log('vote countdown started...');
				this.timer = setInterval(this.tick.bind(this), 1000);
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

			if (document.getElementsByClassName('voted')[0]) {
				return document.getElementsByClassName('voted')[0].getAttribute('value');
			} else {
				return null;
			}
		}
	}, {
		key: 'voting',
		value: function voting(id) {
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

			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement(
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
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,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UTtBQUFBOztBQUNSO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVIsRUFBZSxXQUFVLEtBQXpCO0FBQ0U7QUFBQTtBQUFBLE9BQUssV0FBVSxVQUFmO0FBQUE7QUFBMkIsNENBQUssV0FBVSxjQUFmLEVBQThCLEtBQUksb0JBQWxDLEdBQTNCO0FBQUE7QUFBb0Y7QUFBQTtBQUFBLFFBQUcsV0FBVSxhQUFiO0FBQUE7QUFBQSxNQUFwRjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxPQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFBQTtBQUFpQyxXQUFLLEtBQUwsQ0FBVyxhQUE1QztBQUFBO0FBQUE7QUFGRCxLQUZGO0FBTUUsU0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixHQUF0QixDQUEwQixVQUFDLElBQUQ7QUFBQSxZQUMxQiw4QkFBQyxNQUFELElBQVEsSUFBSSxLQUFLLEVBQWpCLEVBQXFCLE1BQVEsS0FBSyxJQUFsQyxFQUF3QyxRQUFRLE9BQUssTUFBTCxDQUFZLElBQVosUUFBaEQsRUFBd0UsT0FBTyxLQUFLLEtBQXBGLEdBRDBCO0FBQUEsS0FBMUI7QUFORixJQUREO0FBZ0JBOzs7O0VBMUhnQyxnQkFBTSxTOztrQkFBbkIsSSIsImZpbGUiOiJ2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL3Nob3cgcHJvbXB0IGZvciB0aGluZ1xudmFyIFNlbGVjdCA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInZvdGVJbnN0YW5jZVwiIGlkPXtwcm9wcy5pZH0gdmFsdWU9e3Byb3BzLm5hbWV9IG9uQ2xpY2s9eygpID0+IHByb3BzLnZvdGluZyhwcm9wcy5pZCl9PlxuXHRcdDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0vPlxuXHQ8L2Rpdj5cblx0KVxuXG4vL3ZvdGVkIGlzIHRoZSBpZCB0YWcgZm9yIHRoZSBjdXJyZW50IHZvdGVkIGRyYXdpbmdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86IFtdLFxuXHRcdFx0cmVtYWluaW5nVGltZTogMTBcblxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RpbmdDb3VudGRvd24nKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YWl0VGltZScpWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblxuXHQvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0Ly8gXHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHR9XG5cbiAgdGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtyZW1haW5pbmdUaW1lOiB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgLSAxfSk7XG4gIFx0Y29uc29sZS5sb2coJ3RpY2s6ICcgKyB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUpO1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgPD0gMSkge1xuICAgIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6ICchJ30pO1xuICAgIFx0c2V0VGltZW91dCh0aGlzLmhpZGVDb3VudERvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICA7XG4gICAgfVxuICB9XG5cblx0aGlkZUNvdW50RG93bigpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RpbmdDb3VudGRvd24nKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHZhciBpbmZvID0gW107XG5cdFx0c29ja2V0Lm9uKCd2b3RlJywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdC8vdGltZSBmb3IgY291bnRkb3duXG5cdFx0XHR2YXIgdGltZSA9IGRhdGEudGltZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6IHRpbWV9KTtcblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHQvL3ZhciBpbWFnZXMgPSBbXTtcblx0XHRcdGRhdGEuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdFx0Ly9pbWFnZXMucHVzaChibG9iLnZlY3RvckRyYXdpbmcpO1xuXHRcdFx0ICBcdGNhbnZhcy5sb2FkRnJvbUpTT04oIGJsb2IudmVjdG9yRHJhd2luZywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdCAgXHRcdHZhciBpbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoe1xuXHRcdFx0XHRcdFx0XHRmb3JtYXQ6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdFx0XHRtdWx0aXBsaWVyOiAwLjI1LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzc1LFxuXHRcdFx0XHRcdFx0ICBoZWlnaHQ6IDM3NVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRcdGlkOiAnZCcgKyBpbmZvLmxlbmd0aCxcblx0XHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lLCBcblx0XHRcdFx0XHRcdGltYWdlOiBpbWFnZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHQgIFx0XHRjYW52YXMuY2xlYXIoKTtcblx0XHRcdCAgXHR9KVxuXHRcdFx0fSlcbiBcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZW5kZXJJbmZvOiBpbmZvXG5cdFx0XHR9KVxuXG5cdFx0ICAvLyByZWRpcmVjdCB0byB2b3Rpbmcgdmlld1xuXHRcdCAgLy8gaW1hZ2VzIGlzIGFuIGFycmF5IG9mIEpTT04uc3RyaW5naWZ5KGNhbnZhcykgb2JqZWN0cyB0byB2b3RlIG9uXG5cdFx0ICAvL3RoaXMucmVuZGVyRHJhd2luZ3MoaW1hZ2VzKTtcbiAgXG4gICAgXHRjb25zb2xlLmxvZygndm90ZSBjb3VudGRvd24gc3RhcnRlZC4uLicpO1xuICAgIFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMudGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGluZ0NvdW50ZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgXHQgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhaXRUaW1lJylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIFxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRzb2NrZXQub24oJ2NvdW50Vm90ZXMnLCBmdW5jdGlvbigpICB7XG5cdFx0XHQvL0VtaXQgbmFtZSB2b3RlZCBvbiB0byBzZXJ2ZXIuXG5cdFx0XHRzb2NrZXQuZW1pdCgndm90ZScsIHRoaXMuZ2V0Vm90ZWROYW1lKCkpXG5cdFx0XHRzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2NvdW50Vm90ZXMnKVxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZXN1bHQnIFxuXHRcdH0uYmluZCh0aGlzKSlcblx0fSBcblxuXHRnZXRWb3RlZE5hbWUoKSB7XG5cblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXSkge1xuXHQgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0fSBlbHNlIHtcbiAgICAgcmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblxuXHR2b3RpbmcoaWQpIHtcblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdFx0XHR2YXIgdm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uaWRcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uY2xhc3NMaXN0LnJlbW92ZShcInZvdGVkXCIpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2b3RlKS5jbGFzc05hbWUgKz0gXCJ2b3RlSW5zdGFuY2VcIiBcblx0XHR9XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5yZW1vdmUoXCJ2b3RlSW5zdGFuY2VcIilcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NOYW1lICs9IFwidm90ZWRcIlxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly9OZWVkIHRvIGRlY2lkZSBpZiB3ZSB1c2Ugb25lIGJpZyBjYW52YXMsIG9yIGp1c3QgcmVuZGVyIGltYWdlcyBvZiBhbGwgdGhlIGRyYXdpbmdzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCIgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPSd3YWl0VGltZSc+IDxpbWcgY2xhc3NOYW1lPVwibG9hZGluZ1N0dW1wXCIgc3JjPVwic3R1bXB5LWxvYWRpbmcuZ2lmXCIvPiA8cCBjbGFzc05hbWU9XCJsb2FkaW5nVGV4dFwiPkxvYWRpbmcuLi48L3A+IDwvZGl2PlxuXHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT0ndm90aW5nQ291bnRkb3duIHZhbGlnbic+XG5cdFx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJ2b3RlUHJvbXB0XCI+UGljayB5b3VyIGZhdm9yaXRlITwvZGl2PlxuXHRcdFx0ICBcdDxkaXYgY2xhc3NOYW1lPVwidm90ZUNvdW50ZG93blwiPiB7dGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lfSA8L2Rpdj5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8U2VsZWN0IGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90aW5nPXt0aGlzLnZvdGluZy5iaW5kKHRoaXMpfSBpbWFnZT17ZGF0YS5pbWFnZX0vPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufSJdfQ==