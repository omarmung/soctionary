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
			remainingTime: 4
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

			socket.on('draw', function () {

				this.setState({
					drawCanvas: true
				});

				var canvas = new fabric.Canvas('canvas', {
					isDrawingMode: true
				});

				// set brush size
				canvas.freeDrawingBrush.width = 10;

				socket.on('end', function () {
					image = JSON.stringify(canvas);
					canvas.clear();
					//send image to server
					console.log(image);
					socket.emit('image', image);
					window.location.href = '#/vote';
				}.bind(this));
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

		// componentWillUnmount() {
		// 	clearInterval(this.timer);
		// }

	}, {
		key: "tick",
		value: function tick() {
			this.setState({ remainingTime: this.state.remainingTime - 1 });
			console.log('tick: ' + this.state.remainingTime);
			if (this.state.remainingTime <= 1) {
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
				null,
				_react2.default.createElement(
					"div",
					{ className: "drawingCountdown valign" },
					_react2.default.createElement(
						"div",
						{ className: "prompt" },
						"Draw a ",
						window.Animal,
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
//# sourceMappingURL=data:application/json;base64,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cG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbnZhciBCb2FyZCA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9XCIzNzVcIiBoZWlnaHQ9XCIzNzVcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZSxcblx0XHRcdHJlbWFpbmluZ1RpbWU6IDRcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZVxuXHRcdH0pXG5cblx0XHQvLyBjcmVhdGUgY2FudmFzXG5cdFx0dmFyIGltYWdlID0gbnVsbDtcblxuXG5cdFx0c29ja2V0Lm9uKCdkcmF3JywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZHJhd0NhbnZhczogdHJ1ZVxuXHRcdFx0fSlcblxuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjYW52YXMnLCB7XG5cdFx0XHQgIGlzRHJhd2luZ01vZGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzZXQgYnJ1c2ggc2l6ZVxuXHRcdFx0Y2FudmFzLmZyZWVEcmF3aW5nQnJ1c2gud2lkdGggPSAxMDtcblxuXG5cdFx0XHRzb2NrZXQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCAgaW1hZ2UgPSBKU09OLnN0cmluZ2lmeShjYW52YXMpO1xuXHRcdFx0ICBjYW52YXMuY2xlYXIoKTtcblx0XHRcdCAgLy9zZW5kIGltYWdlIHRvIHNlcnZlclxuXHRcdFx0ICBjb25zb2xlLmxvZyhpbWFnZSlcblx0XHRcdCAgc29ja2V0LmVtaXQoJ2ltYWdlJywgaW1hZ2UpOyBcblx0XHRcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy92b3RlJyBcdFx0XHQgIFx0XG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cblxuXHRcdC8vIHN0YXJ0IHRoZSBjb3VudGRvd25cblx0XHQvLyB0aGlzLmNvdW50RG93bigpO1xuXHRcdFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2NvdW50ZG93biBzdGFydGVkLi4uJyk7XG5cdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMudGljay5iaW5kKHRoaXMpLCAxMDAwKVxuXHR9XG5cblx0Ly8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdC8vIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0Ly8gfVxuXG4gIHRpY2soKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogdGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lIC0gMX0pO1xuICBcdGNvbnNvbGUubG9nKCd0aWNrOiAnICsgdGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lIDw9IDEpIHtcbiAgICBcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgXHR0aGlzLnNldFN0YXRlKHtyZW1haW5pbmdUaW1lOiAnRHJhdyEnfSk7XG4gICAgXHRzZXRUaW1lb3V0KHRoaXMuaGlkZUNvdW50RG93bi5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgIDtcbiAgICB9XG4gIH1cblxuXHRoaWRlQ291bnREb3duKCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYXdpbmdDb3VudGRvd24nKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJhd2luZ0NvdW50ZG93biB2YWxpZ24nPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0XCI+RHJhdyBhIHt3aW5kb3cuQW5pbWFsfSBpbi4uLjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duXCI+IHt0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWV9IDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3RoaXMuc3RhdGUuZHJhd0NhbnZhcyA/IDxCb2FyZCAvPiA6IG51bGx9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0KVxuXHR9XG59XG4iXX0=