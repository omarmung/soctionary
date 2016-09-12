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
			document.getElementsByClassName('votingCountdown valign')[0].style.display = 'none';
			document.getElementsByClassName('waitTime')[0].style.display = 'inline';
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.timer);
		}
	}, {
		key: 'tick',
		value: function tick() {
			for (var i = 0; i < this.state.remainingTime; i++) {
				setTimeout(function () {
					this.setState({ remainingTime: this.state.remainingTime - 1 });
				}.bind(this), i * 1000);
			}
			// var time1 = setInterval(function() {
			// 	this.setState({remainingTime: this.state.remainingTime - 1});
			// 	console.log('tick: ' + this.state.remainingTime);
			//   if (this.state.remainingTime <= 0) {
			//   	clearInterval(time1);
			//   }
			// }.bind(this), 1000);
		}
	}, {
		key: 'hideCountDown',
		value: function hideCountDown() {
			document.getElementsByClassName('votingCountdown valign')[0].style.display = 'none';
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			var info = [];
			socket.on('vote', function (data) {
				//time for countdown
				var time = data.time;
				this.setState({ remainingTime: time + 1 });
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
				console.log('info', info);
				this.setState({
					renderInfo: info
				});

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				//this.renderDrawings(images);

				console.log('vote countdown started...');
				this.tick();
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
//# sourceMappingURL=data:application/json;base64,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LE1BQVIsRUFBZSxXQUFVLEtBQXpCO0FBQ0U7QUFBQTtBQUFBLE9BQUssV0FBVSxVQUFmO0FBQUE7QUFBMkIsNENBQUssV0FBVSxjQUFmLEVBQThCLEtBQUksb0JBQWxDLEdBQTNCO0FBQUE7QUFBb0Y7QUFBQTtBQUFBLFFBQUcsV0FBVSxhQUFiO0FBQUE7QUFBQSxNQUFwRjtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxPQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFBQTtBQUFpQyxXQUFLLEtBQUwsQ0FBVyxhQUE1QztBQUFBO0FBQUE7QUFGRCxLQUZGO0FBTUUsU0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixHQUF0QixDQUEwQixVQUFDLElBQUQ7QUFBQSxZQUMxQiw4QkFBQyxNQUFELElBQVEsSUFBSSxLQUFLLEVBQWpCLEVBQXFCLE1BQVEsS0FBSyxJQUFsQyxFQUF3QyxRQUFRLE9BQUssTUFBTCxDQUFZLElBQVosUUFBaEQsRUFBd0UsT0FBTyxLQUFLLEtBQXBGLEdBRDBCO0FBQUEsS0FBMUI7QUFORixJQUREO0FBZ0JBOzs7O0VBaklnQyxnQkFBTSxTOztrQkFBbkIsSSIsImZpbGUiOiJ2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL3Nob3cgcHJvbXB0IGZvciB0aGluZ1xudmFyIFNlbGVjdCA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInZvdGVJbnN0YW5jZVwiIGlkPXtwcm9wcy5pZH0gdmFsdWU9e3Byb3BzLm5hbWV9IG9uQ2xpY2s9eygpID0+IHByb3BzLnZvdGluZyhwcm9wcy5pZCl9PlxuXHRcdDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0vPlxuXHQ8L2Rpdj5cblx0KVxuXG4vL3ZvdGVkIGlzIHRoZSBpZCB0YWcgZm9yIHRoZSBjdXJyZW50IHZvdGVkIGRyYXdpbmdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86IFtdLFxuXHRcdFx0cmVtYWluaW5nVGltZTogMTBcblxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RpbmdDb3VudGRvd24gdmFsaWduJylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2FpdFRpbWUnKVswXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHR9XG5cbiAgdGljaygpIHtcbiAgXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWU7IGkrKykge1xuICBcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICBcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6IHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSAtIDF9KTtcbiAgXHRcdFx0fS5iaW5kKHRoaXMpLCBpKjEwMDApO1xuICBcdFx0fVxuICBcdC8vIHZhciB0aW1lMSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHQgIC8vIFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogdGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lIC0gMX0pO1xuXHQgIC8vIFx0Y29uc29sZS5sb2coJ3RpY2s6ICcgKyB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUpO1xuXHQgIC8vICAgaWYgKHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSA8PSAwKSB7XG5cdCAgLy8gICBcdGNsZWFySW50ZXJ2YWwodGltZTEpO1xuXHQgIC8vICAgfVxuICBcdC8vIH0uYmluZCh0aGlzKSwgMTAwMCk7XG5cbiAgfVxuXG5cdGhpZGVDb3VudERvd24oKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90aW5nQ291bnRkb3duIHZhbGlnbicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dmFyIGluZm8gPSBbXTtcblx0XHRzb2NrZXQub24oJ3ZvdGUnLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Ly90aW1lIGZvciBjb3VudGRvd25cblx0XHRcdHZhciB0aW1lID0gZGF0YS50aW1lO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogdGltZSArIDF9KTtcblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHQvL3ZhciBpbWFnZXMgPSBbXTtcblx0XHRcdGRhdGEuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdFx0Ly9pbWFnZXMucHVzaChibG9iLnZlY3RvckRyYXdpbmcpO1xuXHRcdFx0ICBcdGNhbnZhcy5sb2FkRnJvbUpTT04oIGJsb2IudmVjdG9yRHJhd2luZywgZnVuY3Rpb24oKSB7XG5cblx0XHRcdCAgXHRcdHZhciBpbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoe1xuXHRcdFx0XHRcdFx0XHRmb3JtYXQ6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdFx0XHRtdWx0aXBsaWVyOiAwLjI1LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzc1LFxuXHRcdFx0XHRcdFx0ICBoZWlnaHQ6IDM3NVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRcdGlkOiAnZCcgKyBpbmZvLmxlbmd0aCxcblx0XHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lLCBcblx0XHRcdFx0XHRcdGltYWdlOiBpbWFnZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHQgIFx0XHRjYW52YXMuY2xlYXIoKTtcblx0XHRcdCAgXHR9KVxuXHRcdFx0fSlcbiBcdFx0XHRjb25zb2xlLmxvZygnaW5mbycsIGluZm8pO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cblx0XHQgIC8vIHJlZGlyZWN0IHRvIHZvdGluZyB2aWV3XG5cdFx0ICAvLyBpbWFnZXMgaXMgYW4gYXJyYXkgb2YgSlNPTi5zdHJpbmdpZnkoY2FudmFzKSBvYmplY3RzIHRvIHZvdGUgb25cblx0XHQgIC8vdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpO1xuICBcbiAgICBcdGNvbnNvbGUubG9nKCd2b3RlIGNvdW50ZG93biBzdGFydGVkLi4uJyk7XG4gICAgXHR0aGlzLnRpY2soKTtcbiAgICBcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGluZ0NvdW50ZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgXHQgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhaXRUaW1lJylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIFxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRzb2NrZXQub24oJ2NvdW50Vm90ZXMnLCBmdW5jdGlvbigpICB7XG5cdFx0XHQvL0VtaXQgbmFtZSB2b3RlZCBvbiB0byBzZXJ2ZXIuXG5cdFx0XHRzb2NrZXQuZW1pdCgndm90ZScsIHRoaXMuZ2V0Vm90ZWROYW1lKCkpXG5cdFx0XHRzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2NvdW50Vm90ZXMnKVxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZXN1bHQnIFxuXHRcdH0uYmluZCh0aGlzKSlcblx0fSBcblxuXG5cdGdldFZvdGVkTmFtZSgpIHtcblxuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdCAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHR9IGVsc2Uge1xuICAgICByZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXG5cdHZvdGluZyhpZCkge1xuXHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0pIHtcblx0XHRcdHZhciB2b3RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5pZFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwidm90ZWRcIilcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZvdGUpLmNsYXNzTmFtZSArPSBcInZvdGVJbnN0YW5jZVwiIFxuXHRcdH1cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LnJlbW92ZShcInZvdGVJbnN0YW5jZVwiKVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc05hbWUgKz0gXCJ2b3RlZFwiXG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHQvL05lZWQgdG8gZGVjaWRlIGlmIHdlIHVzZSBvbmUgYmlnIGNhbnZhcywgb3IganVzdCByZW5kZXIgaW1hZ2VzIG9mIGFsbCB0aGUgZHJhd2luZ3Ncblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInZvdGVcIiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdCAgPGRpdiBjbGFzc05hbWU9J3dhaXRUaW1lJz4gPGltZyBjbGFzc05hbWU9XCJsb2FkaW5nU3R1bXBcIiBzcmM9XCJzdHVtcHktbG9hZGluZy5naWZcIi8+IDxwIGNsYXNzTmFtZT1cImxvYWRpbmdUZXh0XCI+TG9hZGluZy4uLjwvcD4gPC9kaXY+XG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPSd2b3RpbmdDb3VudGRvd24gdmFsaWduJz5cblx0XHRcdCAgXHQ8ZGl2IGNsYXNzTmFtZT1cInZvdGVQcm9tcHRcIj5QaWNrIHlvdXIgZmF2b3JpdGUhPC9kaXY+XG5cdFx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJ2b3RlQ291bnRkb3duXCI+IHt0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWV9IDwvZGl2PlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucmVuZGVySW5mby5tYXAoKGRhdGEpID0+IFxuXHRcdFx0XHRcdDxTZWxlY3QgaWQ9e2RhdGEuaWR9IG5hbWUgPSB7ZGF0YS5uYW1lfSB2b3Rpbmc9e3RoaXMudm90aW5nLmJpbmQodGhpcyl9IGltYWdlPXtkYXRhLmltYWdlfS8+XG5cdFx0XHRcdCl9XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19