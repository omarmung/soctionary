"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Used to render a board that we can draw on
var Board = function Board() {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement("canvas", { id: "canvas", width: "375", height: "375" })
	);
};

var Drawing = function (_React$Component) {
	_inherits(Drawing, _React$Component);

	function Drawing(props) {
		_classCallCheck(this, Drawing);

		var _this = _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).call(this, props));

		_this.state = {
			drawCanvas: false,
			remainingTime: 3
		};
		return _this;
	}

	_createClass(Drawing, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.setState({
				drawCanvas: false
			});

			// create canvas
			var image = null;
			var canvas = null;

			socket.on('draw', function () {

				this.setState({
					drawCanvas: true
				});
				//creates canvas
				canvas = new fabric.Canvas('canvas', {
					isDrawingMode: true
				});

				// set brush size
				canvas.freeDrawingBrush.width = 10;
				socket.removeListener('draw');
			}.bind(this));

			socket.on('end', function () {
				var node = document.getElementsByClassName('drawingWrapper')[0];
				this.triggerMouseEvent(node, 'mouseup');
				image = JSON.stringify(canvas);
				canvas.clear();
				//send image to server
				socket.emit('image', image);
				//You may see a lot of these.  These are used to prevent the listener from firing off multiple times from persisting emitters.
				//If you want to see what actually happens, comment out the removeListeners and play the game more than once.
				socket.removeListener('end');
				window.location.href = '#/vote';
			}.bind(this));

			// start the countdown
			// this.countDown();
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			console.log('countdown started...');
			this.timer = setInterval(this.tick.bind(this), 1000);
		}
	}, {
		key: "triggerMouseEvent",
		value: function triggerMouseEvent(node, eventType) {
			var clickEvent = document.createEvent('MouseEvents');
			clickEvent.initEvent(eventType, true, true);
			node.dispatchEvent(clickEvent);
		}
	}, {
		key: "tick",
		value: function tick() {
			this.setState({ remainingTime: this.state.remainingTime - 1 });
			console.log('tick: ' + this.state.remainingTime);
			if (this.state.remainingTime <= 0) {
				clearInterval(this.timer);
				this.setState({ remainingTime: 'Draw!' });
				setTimeout(this.hideCountDown.bind(this), 1000);
				;
			}
		}
	}, {
		key: "hideCountDown",
		value: function hideCountDown() {
			document.getElementsByClassName('drawingCountdown')[0].style.display = 'none';
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "drawingWrapper" },
				_react2.default.createElement(
					"div",
					{ className: "drawingCountdown valign" },
					_react2.default.createElement(
						"div",
						{ className: "prompt" },
						"Draw a ",
						_react2.default.createElement(
							"span",
							{ className: "givenAnimal" },
							window.Animal
						),
						" in..."
					),
					_react2.default.createElement(
						"div",
						{ className: "countdown" },
						" ",
						this.state.remainingTime,
						" "
					)
				),
				this.state.drawCanvas ? _react2.default.createElement(Board, null) : null
			);
		}
	}]);

	return Drawing;
}(_react2.default.Component);

exports.default = Drawing;
//# sourceMappingURL=data:application/json;base64,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QUFLLFdBQVUseUJBQWY7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLFFBQWY7QUFBQTtBQUErQjtBQUFBO0FBQUEsU0FBTSxXQUFVLGFBQWhCO0FBQStCLGNBQU87QUFBdEMsT0FBL0I7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFBQTtBQUE2QixXQUFLLEtBQUwsQ0FBVyxhQUF4QztBQUFBO0FBQUE7QUFGRCxLQUREO0FBS0UsU0FBSyxLQUFMLENBQVcsVUFBWCxHQUF3Qiw4QkFBQyxLQUFELE9BQXhCLEdBQW9DO0FBTHRDLElBREQ7QUFVQTs7OztFQTFGbUMsZ0JBQU0sUzs7a0JBQXRCLE8iLCJmaWxlIjoiZHJhd2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy9Vc2VkIHRvIHJlbmRlciBhIGJvYXJkIHRoYXQgd2UgY2FuIGRyYXcgb25cbnZhciBCb2FyZCA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9XCIzNzVcIiBoZWlnaHQ9XCIzNzVcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuIFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2UsXG5cdFx0XHRyZW1haW5pbmdUaW1lOiAzXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2Vcblx0XHR9KVxuXG5cdFx0Ly8gY3JlYXRlIGNhbnZhc1xuXHRcdHZhciBpbWFnZSA9IG51bGw7XG5cdFx0dmFyIGNhbnZhcyA9IG51bGw7XG5cblxuXHRcdHNvY2tldC5vbignZHJhdycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRyYXdDYW52YXM6IHRydWVcblx0XHRcdH0pXG5cdFx0XHQvL2NyZWF0ZXMgY2FudmFzXG5cdFx0XHRjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygnY2FudmFzJywge1xuXHRcdFx0ICBpc0RyYXdpbmdNb2RlOiB0cnVlXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gc2V0IGJydXNoIHNpemVcblx0XHRcdGNhbnZhcy5mcmVlRHJhd2luZ0JydXNoLndpZHRoID0gMTA7XG5cdFx0XHRzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2RyYXcnKTtcblxuXG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHNvY2tldC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdCAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmF3aW5nV3JhcHBlcicpWzBdXG5cdFx0ICB0aGlzLnRyaWdnZXJNb3VzZUV2ZW50KG5vZGUsICdtb3VzZXVwJylcblx0XHQgIGltYWdlID0gSlNPTi5zdHJpbmdpZnkoY2FudmFzKTtcblx0XHQgIGNhbnZhcy5jbGVhcigpO1xuXHRcdCAgLy9zZW5kIGltYWdlIHRvIHNlcnZlclxuXHRcdCAgc29ja2V0LmVtaXQoJ2ltYWdlJywgaW1hZ2UpOyBcblx0XHQgIC8vWW91IG1heSBzZWUgYSBsb3Qgb2YgdGhlc2UuICBUaGVzZSBhcmUgdXNlZCB0byBwcmV2ZW50IHRoZSBsaXN0ZW5lciBmcm9tIGZpcmluZyBvZmYgbXVsdGlwbGUgdGltZXMgZnJvbSBwZXJzaXN0aW5nIGVtaXR0ZXJzLlxuXHRcdCAgLy9JZiB5b3Ugd2FudCB0byBzZWUgd2hhdCBhY3R1YWxseSBoYXBwZW5zLCBjb21tZW50IG91dCB0aGUgcmVtb3ZlTGlzdGVuZXJzIGFuZCBwbGF5IHRoZSBnYW1lIG1vcmUgdGhhbiBvbmNlLlxuXHRcdCAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdlbmQnKTtcblx0XHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvdm90ZScgXHRcdFx0ICBcdFxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHQvLyBzdGFydCB0aGUgY291bnRkb3duXG5cdFx0Ly8gdGhpcy5jb3VudERvd24oKTtcblx0XHRcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnNvbGUubG9nKCdjb3VudGRvd24gc3RhcnRlZC4uLicpO1xuXHRcdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnRpY2suYmluZCh0aGlzKSwgMTAwMClcblx0fVxuXG4gICB0cmlnZ2VyTW91c2VFdmVudCAobm9kZSwgZXZlbnRUeXBlKSB7XG4gICAgdmFyIGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCAoJ01vdXNlRXZlbnRzJyk7XG4gICAgY2xpY2tFdmVudC5pbml0RXZlbnQgKGV2ZW50VHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50IChjbGlja0V2ZW50KTtcblx0fVxuICB0aWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6IHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSAtIDF9KTtcbiAgXHRjb25zb2xlLmxvZygndGljazogJyArIHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSk7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSA8PSAwKSB7XG4gICAgXHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogJ0RyYXchJ30pO1xuICAgIFx0c2V0VGltZW91dCh0aGlzLmhpZGVDb3VudERvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICA7XG4gICAgfVxuICB9XG5cblx0aGlkZUNvdW50RG93bigpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmF3aW5nQ291bnRkb3duJylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9IFwiZHJhd2luZ1dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RyYXdpbmdDb3VudGRvd24gdmFsaWduJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb21wdFwiPkRyYXcgYSA8c3BhbiBjbGFzc05hbWU9XCJnaXZlbkFuaW1hbFwiPnt3aW5kb3cuQW5pbWFsfTwvc3Bhbj4gaW4uLi48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93blwiPiB7dGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lfSA8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmRyYXdDYW52YXMgPyA8Qm9hcmQgLz4gOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuIl19