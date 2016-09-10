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
	return _react2.default.createElement('div', { className: 'getouttahere', id: props.id, value: props.name, onClick: function onClick() {
			return props.voting(props.id);
		} });
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
				console.log('data', data);
				var images = [];
				data.images.forEach(function (blob) {
					images.push(blob.vectorDrawing);
					info.push({
						id: 'd' + info.length,
						name: blob.playerName
					});
				});

				this.setState({
					renderInfo: info
				});
				console.log(this.state.renderInfo);

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				this.renderDrawings(images);
			}.bind(this));

			socket.on('countVotes', function () {
				//Emit name voted on to server.
				console.log('name', this.getVotedName());
				socket.emit('vote', this.getVotedName());
				var node = document.getElementById('vote');
				while (node.firstChild) {
					node.removeChild(node.firstChild);
				}
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
		key: 'renderDrawings',
		value: function renderDrawings(arr) {
			// arr.forEach(function(pic) {

			var canvas = new fabric.Canvas('test');
			var imageData = [];
			var count = -1;
			arr.forEach(function (pic) {

				// canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function() {
				//     var image = new Image();
				//     var drawings = document.getElementById('test');
				//     image.src = drawings.toDataUrl("image/png");
				//     document.getElementById('vote').appendChild(image);
				// });

				canvas.loadFromJSON(pic, function () {
					// canvas.renderAll.bind(canvas)
					// var blob = JSON.parse(json);
					var image = new Image();

					image.src = canvas.toDataURL("image/png");
					count++;
					var id = 'd' + count;
					document.getElementById(id).appendChild(image);
					canvas.clear();

					//place image on canvas/page appropriately
				});
				//canvas.renderAll.bind(canvas)
				// })
			});
			// var parent = document.getElementById("vote");
			// var child = document.getElementById("test");
			// parent.removeChild(child);
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
					return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2) });
				})
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,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WUFBUCxDQUFxQixHQUFyQixFQUEwQixZQUFXO0FBQ3BDO0FBQ0E7QUFDQSxTQUFJLFFBQVEsSUFBSSxLQUFKLEVBQVo7O0FBRUEsV0FBTSxHQUFOLEdBQVksT0FBTyxTQUFQLENBQWlCLFdBQWpCLENBQVo7QUFDQTtBQUNBLFNBQUksS0FBSyxNQUFNLEtBQWY7QUFDQSxjQUFTLGNBQVQsQ0FBd0IsRUFBeEIsRUFBNEIsV0FBNUIsQ0FBd0MsS0FBeEM7QUFDQSxZQUFPLEtBQVA7O0FBRUE7QUFDQSxLQVpEO0FBYUg7QUFDRDtBQUVFLElBekJEO0FBMEJBO0FBQ0E7QUFDQTtBQUVEOzs7MkJBR1E7QUFBQTs7QUFDUjtBQUNBLFVBQ0M7QUFBQTtBQUFBLE1BQUssSUFBRyxNQUFSO0FBQ0UsU0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixHQUF0QixDQUEwQixVQUFDLElBQUQ7QUFBQSxZQUMxQiw4QkFBQyxNQUFELElBQVEsSUFBSSxLQUFLLEVBQWpCLEVBQXFCLE1BQVEsS0FBSyxJQUFsQyxFQUF3QyxRQUFRLE9BQUssTUFBTCxDQUFZLElBQVosUUFBaEQsR0FEMEI7QUFBQSxLQUExQjtBQURGLElBREQ7QUFXQTs7OztFQTNIZ0MsZ0JBQU0sUzs7a0JBQW5CLEkiLCJmaWxlIjoidm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy9zaG93IHByb21wdCBmb3IgdGhpbmdcbnZhciBTZWxlY3QgPSAocHJvcHMpID0+IChcblx0PGRpdiBjbGFzc05hbWU9J2dldG91dHRhaGVyZSdpZD17cHJvcHMuaWR9IHZhbHVlPXtwcm9wcy5uYW1lfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy52b3RpbmcocHJvcHMuaWQpfT5cblx0PC9kaXY+XG5cdClcblxuLy92b3RlZCBpcyB0aGUgaWQgdGFnIGZvciB0aGUgY3VycmVudCB2b3RlZCBkcmF3aW5nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZvdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZW5kZXJJbmZvOiBbXVxuXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHZhciBpbmZvID0gW107XG5cdFx0c29ja2V0Lm9uKCd2b3RlJywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdC8vdGltZSBmb3IgY291bnRkb3duXG5cdFx0XHR2YXIgdGltZSA9IGRhdGEudGltZTtcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhJyxkYXRhKVxuXHRcdFx0dmFyIGltYWdlcyA9IFtdO1xuXHRcdFx0ZGF0YS5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0XHRpbWFnZXMucHVzaChibG9iLnZlY3RvckRyYXdpbmcpO1xuXHRcdFx0XHRpbmZvLnB1c2goe1xuXHRcdFx0XHRcdGlkOiAnZCcgKyBpbmZvLmxlbmd0aCxcblx0XHRcdFx0XHRuYW1lOmJsb2IucGxheWVyTmFtZSBcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnJlbmRlckluZm8pXG5cblx0XHQgIC8vIHJlZGlyZWN0IHRvIHZvdGluZyB2aWV3XG5cdFx0ICAvLyBpbWFnZXMgaXMgYW4gYXJyYXkgb2YgSlNPTi5zdHJpbmdpZnkoY2FudmFzKSBvYmplY3RzIHRvIHZvdGUgb25cblx0XHQgIHRoaXMucmVuZGVyRHJhd2luZ3MoaW1hZ2VzKTtcblxuXG5cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c29ja2V0Lm9uKCdjb3VudFZvdGVzJywgZnVuY3Rpb24oKSAge1xuXHRcdFx0Ly9FbWl0IG5hbWUgdm90ZWQgb24gdG8gc2VydmVyLlxuXHRcdFx0Y29uc29sZS5sb2coJ25hbWUnLHRoaXMuZ2V0Vm90ZWROYW1lKCkpO1xuXHRcdFx0c29ja2V0LmVtaXQoJ3ZvdGUnLCB0aGlzLmdldFZvdGVkTmFtZSgpKVxuXHRcdFx0dmFyIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm90ZScpO1xuXHRcdFx0d2hpbGUobm9kZS5maXJzdENoaWxkKSB7XG5cdFx0XHRcdG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcmVzdWx0JyBcblx0XHR9LmJpbmQodGhpcykpXG5cblxuXHR9IFxuXG5cblxuXHRnZXRWb3RlZE5hbWUoKSB7XG5cblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXSkge1xuXHQgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0fSBlbHNlIHtcbiAgICAgcmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblxuXHR2b3RpbmcoaWQpIHtcblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ2b3RlZFwiKVxuXHRcdH1cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NOYW1lICs9IFwidm90ZWRcIlxuXHR9XG5cblx0cmVuZGVyRHJhd2luZ3MoYXJyKXtcblx0XHQvLyBhcnIuZm9yRWFjaChmdW5jdGlvbihwaWMpIHtcblxuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCd0ZXN0Jylcblx0XHRcdHZhciBpbWFnZURhdGEgPSBbXTtcblx0XHRcdHZhciBjb3VudCA9IC0xO1xuXHRcdFx0YXJyLmZvckVhY2goZnVuY3Rpb24ocGljKSB7XG5cblx0XHRcdC8vIGNhbnZhcy5sb2FkRnJvbUpTT04oanNvbiwgY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcyksIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0Ly8gICAgIHZhciBkcmF3aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG5cdFx0XHQvLyAgICAgaW1hZ2Uuc3JjID0gZHJhd2luZ3MudG9EYXRhVXJsKFwiaW1hZ2UvcG5nXCIpO1xuXHRcdFx0Ly8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b3RlJykuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXHRcdFx0Ly8gfSk7XG5cblx0XHRcdCAgXHRjYW52YXMubG9hZEZyb21KU09OKCBwaWMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ICBcdFx0Ly8gY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHRcdCAgXHRcdC8vIHZhciBibG9iID0gSlNPTi5wYXJzZShqc29uKTtcblx0XHRcdCAgXHRcdHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHQgIFx0XHRpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuXHRcdFx0ICBcdFx0Y291bnQrKztcblx0XHRcdCAgXHRcdHZhciBpZCA9ICdkJyArIGNvdW50O1xuXHRcdFx0ICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFwcGVuZENoaWxkKGltYWdlKTtcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXG5cdFx0XHQgIFx0XHQvL3BsYWNlIGltYWdlIG9uIGNhbnZhcy9wYWdlIGFwcHJvcHJpYXRlbHlcblx0XHRcdCAgXHR9KTtcblx0XHRcdC8vY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHQvLyB9KVxuXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0XHQvLyB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RlXCIpO1xuXHRcdFx0Ly8gdmFyIGNoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0XCIpO1xuXHRcdFx0Ly8gcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcblxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly9OZWVkIHRvIGRlY2lkZSBpZiB3ZSB1c2Ugb25lIGJpZyBjYW52YXMsIG9yIGp1c3QgcmVuZGVyIGltYWdlcyBvZiBhbGwgdGhlIGRyYXdpbmdzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8U2VsZWN0IGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90aW5nPXt0aGlzLnZvdGluZy5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdCl9XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19