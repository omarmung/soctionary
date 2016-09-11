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
		{ id: props.id, value: props.name, onClick: function onClick() {
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
			renderInfo: []

		};
		return _this;
	}

	_createClass(Vote, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var info = [];
			socket.on('vote', function (data) {
				//time for countdown
				var time = data.time;
				var canvas = new fabric.Canvas('test');
				console.log('data', data);
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
				console.log('render images', this.state.renderInfo);

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				//this.renderDrawings(images);

			}.bind(this));

			socket.on('countVotes', function () {
				//Emit name voted on to server.
				console.log('name', this.getVotedName());
				socket.emit('vote', this.getVotedName());
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
				document.getElementsByClassName('voted')[0].classList.remove("voted");
			}
			document.getElementById(id).className += "voted";
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement(
				'div',
				{ id: 'vote' },
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2), image: data.image });
				})
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,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QUFzQixHQUF0QixDQUEwQixVQUFDLElBQUQ7QUFBQSxZQUMxQiw4QkFBQyxNQUFELElBQVEsSUFBSSxLQUFLLEVBQWpCLEVBQXFCLE1BQVEsS0FBSyxJQUFsQyxFQUF3QyxRQUFRLE9BQUssTUFBTCxDQUFZLElBQVosUUFBaEQsRUFBd0UsT0FBTyxLQUFLLEtBQXBGLEdBRDBCO0FBQUEsS0FBMUI7QUFERixJQUREO0FBV0E7Ozs7RUEvRmdDLGdCQUFNLFM7O2tCQUFuQixJIiwiZmlsZSI6InZvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vc2hvdyBwcm9tcHQgZm9yIHRoaW5nXG52YXIgU2VsZWN0ID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgaWQ9e3Byb3BzLmlkfSB2YWx1ZT17cHJvcHMubmFtZX0gb25DbGljaz17KCkgPT4gcHJvcHMudm90aW5nKHByb3BzLmlkKX0+XG5cdFx0PGltZyBzcmM9e3Byb3BzLmltYWdlfS8+XG5cdDwvZGl2PlxuXHQpXG5cbi8vdm90ZWQgaXMgdGhlIGlkIHRhZyBmb3IgdGhlIGN1cnJlbnQgdm90ZWQgZHJhd2luZ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb3RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmVuZGVySW5mbzogW11cblxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR2YXIgaW5mbyA9IFtdO1xuXHRcdHNvY2tldC5vbigndm90ZScsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHQvL3RpbWUgZm9yIGNvdW50ZG93blxuXHRcdFx0dmFyIHRpbWUgPSBkYXRhLnRpbWU7XG5cdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ3Rlc3QnKVxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEnLGRhdGEpXG5cdFx0XHQvL3ZhciBpbWFnZXMgPSBbXTtcblx0XHRcdGRhdGEuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdFx0Ly9pbWFnZXMucHVzaChibG9iLnZlY3RvckRyYXdpbmcpO1xuXHRcdFx0ICBcdGNhbnZhcy5sb2FkRnJvbUpTT04oIGJsb2IudmVjdG9yRHJhd2luZywgZnVuY3Rpb24oKSB7XG5cblxuXHRcdFx0ICBcdFx0dmFyIGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCh7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdFx0XHRcdG11bHRpcGxpZXI6IDAuMjUsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzNzUsXG5cdFx0XHRcdFx0XHQgIGhlaWdodDogMzc1XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRpbmZvLnB1c2goe1xuXHRcdFx0XHRcdFx0aWQ6ICdkJyArIGluZm8ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bmFtZTpibG9iLnBsYXllck5hbWUsIFxuXHRcdFx0XHRcdFx0aW1hZ2U6IGltYWdlXG5cdFx0XHRcdFx0fSlcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXHRcdFx0ICBcdH0pXG5cdFx0XHR9KVxuIFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cdFx0XHRjb25zb2xlLmxvZygncmVuZGVyIGltYWdlcycsdGhpcy5zdGF0ZS5yZW5kZXJJbmZvKVxuXG5cdFx0ICAvLyByZWRpcmVjdCB0byB2b3Rpbmcgdmlld1xuXHRcdCAgLy8gaW1hZ2VzIGlzIGFuIGFycmF5IG9mIEpTT04uc3RyaW5naWZ5KGNhbnZhcykgb2JqZWN0cyB0byB2b3RlIG9uXG5cdFx0ICAvL3RoaXMucmVuZGVyRHJhd2luZ3MoaW1hZ2VzKTtcblxuXG5cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c29ja2V0Lm9uKCdjb3VudFZvdGVzJywgZnVuY3Rpb24oKSAge1xuXHRcdFx0Ly9FbWl0IG5hbWUgdm90ZWQgb24gdG8gc2VydmVyLlxuXHRcdFx0Y29uc29sZS5sb2coJ25hbWUnLHRoaXMuZ2V0Vm90ZWROYW1lKCkpO1xuXHRcdFx0c29ja2V0LmVtaXQoJ3ZvdGUnLCB0aGlzLmdldFZvdGVkTmFtZSgpKVxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZXN1bHQnIFxuXHRcdH0uYmluZCh0aGlzKSlcblxuXG5cdH0gXG5cblxuXG5cdGdldFZvdGVkTmFtZSgpIHtcblxuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdCAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHR9IGVsc2Uge1xuICAgICByZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXG5cdHZvdGluZyhpZCkge1xuXHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0pIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uY2xhc3NMaXN0LnJlbW92ZShcInZvdGVkXCIpXG5cdFx0fVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc05hbWUgKz0gXCJ2b3RlZFwiXG5cdH1cblxuXHRcblxuXG5cdHJlbmRlcigpIHtcblx0XHQvL05lZWQgdG8gZGVjaWRlIGlmIHdlIHVzZSBvbmUgYmlnIGNhbnZhcywgb3IganVzdCByZW5kZXIgaW1hZ2VzIG9mIGFsbCB0aGUgZHJhd2luZ3Ncblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInZvdGVcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucmVuZGVySW5mby5tYXAoKGRhdGEpID0+IFxuXHRcdFx0XHRcdDxTZWxlY3QgaWQ9e2RhdGEuaWR9IG5hbWUgPSB7ZGF0YS5uYW1lfSB2b3Rpbmc9e3RoaXMudm90aW5nLmJpbmQodGhpcyl9IGltYWdlPXtkYXRhLmltYWdlfS8+XG5cdFx0XHRcdCl9XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19