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
//# sourceMappingURL=data:application/json;base64,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QUNBOzs7MkJBR1E7QUFBQTs7QUFDUjtBQUNBLFVBQ0M7QUFBQTtBQUFBLE1BQUssSUFBRyxNQUFSO0FBQ0UsU0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixHQUF0QixDQUEwQixVQUFDLElBQUQ7QUFBQSxZQUMxQiw4QkFBQyxNQUFELElBQVEsSUFBSSxLQUFLLEVBQWpCLEVBQXFCLE1BQVEsS0FBSyxJQUFsQyxFQUF3QyxRQUFRLE9BQUssTUFBTCxDQUFZLElBQVosUUFBaEQsRUFBd0UsT0FBTyxLQUFLLEtBQXBGLEdBRDBCO0FBQUEsS0FBMUI7QUFERixJQUREO0FBV0E7Ozs7RUE5RmdDLGdCQUFNLFM7O2tCQUFuQixJIiwiZmlsZSI6InZvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vc2hvdyBwcm9tcHQgZm9yIHRoaW5nXG52YXIgU2VsZWN0ID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwidm90ZUluc3RhbmNlXCIgaWQ9e3Byb3BzLmlkfSB2YWx1ZT17cHJvcHMubmFtZX0gb25DbGljaz17KCkgPT4gcHJvcHMudm90aW5nKHByb3BzLmlkKX0+XG5cdFx0PGltZyBzcmM9e3Byb3BzLmltYWdlfS8+XG5cdDwvZGl2PlxuXHQpXG5cbi8vdm90ZWQgaXMgdGhlIGlkIHRhZyBmb3IgdGhlIGN1cnJlbnQgdm90ZWQgZHJhd2luZ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb3RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmVuZGVySW5mbzogW11cblxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR2YXIgaW5mbyA9IFtdO1xuXHRcdHNvY2tldC5vbigndm90ZScsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHQvL3RpbWUgZm9yIGNvdW50ZG93blxuXHRcdFx0dmFyIHRpbWUgPSBkYXRhLnRpbWU7XG5cdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ3Rlc3QnKVxuXHRcdFx0Ly92YXIgaW1hZ2VzID0gW107XG5cdFx0XHRkYXRhLmltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHRcdC8vaW1hZ2VzLnB1c2goYmxvYi52ZWN0b3JEcmF3aW5nKTtcblx0XHRcdCAgXHRjYW52YXMubG9hZEZyb21KU09OKCBibG9iLnZlY3RvckRyYXdpbmcsIGZ1bmN0aW9uKCkge1xuXG5cblx0XHRcdCAgXHRcdHZhciBpbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoe1xuXHRcdFx0XHRcdFx0XHRmb3JtYXQ6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdFx0XHRtdWx0aXBsaWVyOiAwLjI1LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzc1LFxuXHRcdFx0XHRcdFx0ICBoZWlnaHQ6IDM3NVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRcdGlkOiAnZCcgKyBpbmZvLmxlbmd0aCxcblx0XHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lLCBcblx0XHRcdFx0XHRcdGltYWdlOiBpbWFnZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHQgIFx0XHRjYW52YXMuY2xlYXIoKTtcblx0XHRcdCAgXHR9KVxuXHRcdFx0fSlcbiBcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZW5kZXJJbmZvOiBpbmZvXG5cdFx0XHR9KVxuXG5cdFx0ICAvLyByZWRpcmVjdCB0byB2b3Rpbmcgdmlld1xuXHRcdCAgLy8gaW1hZ2VzIGlzIGFuIGFycmF5IG9mIEpTT04uc3RyaW5naWZ5KGNhbnZhcykgb2JqZWN0cyB0byB2b3RlIG9uXG5cdFx0ICAvL3RoaXMucmVuZGVyRHJhd2luZ3MoaW1hZ2VzKTtcblxuXG5cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c29ja2V0Lm9uKCdjb3VudFZvdGVzJywgZnVuY3Rpb24oKSAge1xuXHRcdFx0Ly9FbWl0IG5hbWUgdm90ZWQgb24gdG8gc2VydmVyLlxuXHRcdFx0c29ja2V0LmVtaXQoJ3ZvdGUnLCB0aGlzLmdldFZvdGVkTmFtZSgpKVxuXHRcdFx0c29ja2V0LnJlbW92ZUxpc3RlbmVyKCdjb3VudFZvdGVzJylcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcmVzdWx0JyBcblx0XHR9LmJpbmQodGhpcykpXG5cblxuXHR9IFxuXG5cblxuXHRnZXRWb3RlZE5hbWUoKSB7XG5cblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXSkge1xuXHQgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0fSBlbHNlIHtcbiAgICAgcmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblxuXHR2b3RpbmcoaWQpIHtcblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdFx0XHR2YXIgdm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uaWRcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uY2xhc3NMaXN0LnJlbW92ZShcInZvdGVkXCIpXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2b3RlKS5jbGFzc05hbWUgKz0gXCJ2b3RlSW5zdGFuY2VcIiBcblx0XHR9XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5yZW1vdmUoXCJ2b3RlSW5zdGFuY2VcIilcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NOYW1lICs9IFwidm90ZWRcIlxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly9OZWVkIHRvIGRlY2lkZSBpZiB3ZSB1c2Ugb25lIGJpZyBjYW52YXMsIG9yIGp1c3QgcmVuZGVyIGltYWdlcyBvZiBhbGwgdGhlIGRyYXdpbmdzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8U2VsZWN0IGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90aW5nPXt0aGlzLnZvdGluZy5iaW5kKHRoaXMpfSBpbWFnZT17ZGF0YS5pbWFnZX0vPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufSJdfQ==