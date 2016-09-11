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

					image.src = canvas.toDataURL({
						format: 'image/png',
						multiplier: 0.25,
						width: 375,
						height: 375
					});
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
					return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2), image: data.image });
				})
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,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QUFZLEVBQWhCO0FBQ0EsT0FBSSxRQUFRLENBQUMsQ0FBYjtBQUNBLE9BQUksT0FBSixDQUFZLFVBQVMsR0FBVCxFQUFjOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUcsV0FBTyxZQUFQLENBQXFCLEdBQXJCLEVBQTBCLFlBQVc7QUFDcEM7QUFDQTtBQUNBLFNBQUksUUFBUSxJQUFJLEtBQUosRUFBWjs7QUFFQSxXQUFNLEdBQU4sR0FBWSxPQUFPLFNBQVAsQ0FBaUI7QUFDN0IsY0FBUSxXQURxQjtBQUU3QixrQkFBWSxJQUZpQjtBQUc3QixhQUFPLEdBSHNCO0FBSTVCLGNBQVE7QUFKb0IsTUFBakIsQ0FBWjtBQU1BO0FBQ0EsU0FBSSxLQUFLLE1BQU0sS0FBZjtBQUNBLGNBQVMsY0FBVCxDQUF3QixFQUF4QixFQUE0QixXQUE1QixDQUF3QyxLQUF4QztBQUNBLFlBQU8sS0FBUDs7QUFFQTtBQUNBLEtBakJEO0FBa0JIO0FBQ0Q7QUFFRSxJQTlCRDtBQStCQTtBQUNBO0FBQ0E7QUFFRDs7OzJCQUdRO0FBQUE7O0FBQ1I7QUFDQSxVQUNDO0FBQUE7QUFBQSxNQUFLLElBQUcsTUFBUjtBQUNFLFNBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsR0FBdEIsQ0FBMEIsVUFBQyxJQUFEO0FBQUEsWUFDMUIsOEJBQUMsTUFBRCxJQUFRLElBQUksS0FBSyxFQUFqQixFQUFxQixNQUFRLEtBQUssSUFBbEMsRUFBd0MsUUFBUSxPQUFLLE1BQUwsQ0FBWSxJQUFaLFFBQWhELEVBQXdFLE9BQU8sS0FBSyxLQUFwRixHQUQwQjtBQUFBLEtBQTFCO0FBREYsSUFERDtBQVdBOzs7O0VBeElnQyxnQkFBTSxTOztrQkFBbkIsSSIsImZpbGUiOiJ2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL3Nob3cgcHJvbXB0IGZvciB0aGluZ1xudmFyIFNlbGVjdCA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2IGlkPXtwcm9wcy5pZH0gdmFsdWU9e3Byb3BzLm5hbWV9IG9uQ2xpY2s9eygpID0+IHByb3BzLnZvdGluZyhwcm9wcy5pZCl9PlxuXHRcdDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0vPlxuXHQ8L2Rpdj5cblx0KVxuXG4vL3ZvdGVkIGlzIHRoZSBpZCB0YWcgZm9yIHRoZSBjdXJyZW50IHZvdGVkIGRyYXdpbmdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86IFtdXG5cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dmFyIGluZm8gPSBbXTtcblx0XHRzb2NrZXQub24oJ3ZvdGUnLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Ly90aW1lIGZvciBjb3VudGRvd25cblx0XHRcdHZhciB0aW1lID0gZGF0YS50aW1lO1xuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCd0ZXN0Jylcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhJyxkYXRhKVxuXHRcdFx0Ly92YXIgaW1hZ2VzID0gW107XG5cdFx0XHRkYXRhLmltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHRcdC8vaW1hZ2VzLnB1c2goYmxvYi52ZWN0b3JEcmF3aW5nKTtcblx0XHRcdCAgXHRjYW52YXMubG9hZEZyb21KU09OKCBibG9iLnZlY3RvckRyYXdpbmcsIGZ1bmN0aW9uKCkge1xuXG5cblx0XHRcdCAgXHRcdHZhciBpbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoe1xuXHRcdFx0XHRcdFx0XHRmb3JtYXQ6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdFx0XHRtdWx0aXBsaWVyOiAwLjI1LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzc1LFxuXHRcdFx0XHRcdFx0ICBoZWlnaHQ6IDM3NVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRcdGlkOiAnZCcgKyBpbmZvLmxlbmd0aCxcblx0XHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lLCBcblx0XHRcdFx0XHRcdGltYWdlOiBpbWFnZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHQgIFx0XHRjYW52YXMuY2xlYXIoKTtcblx0XHRcdCAgXHR9KVxuXHRcdFx0fSlcbiBcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZW5kZXJJbmZvOiBpbmZvXG5cdFx0XHR9KVxuXHRcdFx0Y29uc29sZS5sb2coJ3JlbmRlciBpbWFnZXMnLHRoaXMuc3RhdGUucmVuZGVySW5mbylcblxuXHRcdCAgLy8gcmVkaXJlY3QgdG8gdm90aW5nIHZpZXdcblx0XHQgIC8vIGltYWdlcyBpcyBhbiBhcnJheSBvZiBKU09OLnN0cmluZ2lmeShjYW52YXMpIG9iamVjdHMgdG8gdm90ZSBvblxuXHRcdCAgLy90aGlzLnJlbmRlckRyYXdpbmdzKGltYWdlcyk7XG5cblxuXG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHNvY2tldC5vbignY291bnRWb3RlcycsIGZ1bmN0aW9uKCkgIHtcblx0XHRcdC8vRW1pdCBuYW1lIHZvdGVkIG9uIHRvIHNlcnZlci5cblx0XHRcdGNvbnNvbGUubG9nKCduYW1lJyx0aGlzLmdldFZvdGVkTmFtZSgpKTtcblx0XHRcdHNvY2tldC5lbWl0KCd2b3RlJywgdGhpcy5nZXRWb3RlZE5hbWUoKSlcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcmVzdWx0JyBcblx0XHR9LmJpbmQodGhpcykpXG5cblxuXHR9IFxuXG5cblxuXHRnZXRWb3RlZE5hbWUoKSB7XG5cblx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXSkge1xuXHQgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0fSBlbHNlIHtcbiAgICAgcmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblxuXHR2b3RpbmcoaWQpIHtcblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ2b3RlZFwiKVxuXHRcdH1cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NOYW1lICs9IFwidm90ZWRcIlxuXHR9XG5cblx0cmVuZGVyRHJhd2luZ3MoYXJyKXtcblx0XHQvLyBhcnIuZm9yRWFjaChmdW5jdGlvbihwaWMpIHtcblxuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCd0ZXN0Jylcblx0XHRcdHZhciBpbWFnZURhdGEgPSBbXTtcblx0XHRcdHZhciBjb3VudCA9IC0xO1xuXHRcdFx0YXJyLmZvckVhY2goZnVuY3Rpb24ocGljKSB7XG5cblx0XHRcdC8vIGNhbnZhcy5sb2FkRnJvbUpTT04oanNvbiwgY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcyksIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0Ly8gICAgIHZhciBkcmF3aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG5cdFx0XHQvLyAgICAgaW1hZ2Uuc3JjID0gZHJhd2luZ3MudG9EYXRhVXJsKFwiaW1hZ2UvcG5nXCIpO1xuXHRcdFx0Ly8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b3RlJykuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXHRcdFx0Ly8gfSk7XG5cblx0XHRcdCAgXHRjYW52YXMubG9hZEZyb21KU09OKCBwaWMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ICBcdFx0Ly8gY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHRcdCAgXHRcdC8vIHZhciBibG9iID0gSlNPTi5wYXJzZShqc29uKTtcblx0XHRcdCAgXHRcdHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHQgIFx0XHRpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGllcjogMC4yNSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM3NSxcblx0XHRcdFx0XHRcdCAgaGVpZ2h0OiAzNzVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0ICBcdFx0Y291bnQrKztcblx0XHRcdCAgXHRcdHZhciBpZCA9ICdkJyArIGNvdW50O1xuXHRcdFx0ICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFwcGVuZENoaWxkKGltYWdlKTtcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXG5cdFx0XHQgIFx0XHQvL3BsYWNlIGltYWdlIG9uIGNhbnZhcy9wYWdlIGFwcHJvcHJpYXRlbHlcblx0XHRcdCAgXHR9KTtcblx0XHRcdC8vY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHQvLyB9KVxuXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0XHQvLyB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RlXCIpO1xuXHRcdFx0Ly8gdmFyIGNoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0XCIpO1xuXHRcdFx0Ly8gcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcblxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly9OZWVkIHRvIGRlY2lkZSBpZiB3ZSB1c2Ugb25lIGJpZyBjYW52YXMsIG9yIGp1c3QgcmVuZGVyIGltYWdlcyBvZiBhbGwgdGhlIGRyYXdpbmdzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8U2VsZWN0IGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90aW5nPXt0aGlzLnZvdGluZy5iaW5kKHRoaXMpfSBpbWFnZT17ZGF0YS5pbWFnZX0vPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufSJdfQ==