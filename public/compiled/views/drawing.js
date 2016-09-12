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
			var canvas = null;

			socket.on('draw', function () {

				this.setState({
					drawCanvas: true
				});

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
				{ className: "drawingWrapper" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxTQUFSLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLEtBQTFCLEVBQWdDLFFBQU8sS0FBdkM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFPcUIsTzs7O0FBQ3BCLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVksS0FEQTtBQUVaLGtCQUFlO0FBRkgsR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FFb0I7QUFDcEIsUUFBSyxRQUFMLENBQWM7QUFDYixnQkFBWTtBQURDLElBQWQ7O0FBSUE7QUFDQSxPQUFJLFFBQVEsSUFBWjtBQUNBLE9BQUksU0FBUyxJQUFiOztBQUdBLFVBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTs7QUFFN0IsU0FBSyxRQUFMLENBQWM7QUFDYixpQkFBWTtBQURDLEtBQWQ7O0FBSUEsYUFBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixRQUFsQixFQUE0QjtBQUNuQyxvQkFBZTtBQURvQixLQUE1QixDQUFUOztBQUlBO0FBQ0EsV0FBTyxnQkFBUCxDQUF3QixLQUF4QixHQUFnQyxFQUFoQztBQUNBLFdBQU8sY0FBUCxDQUFzQixNQUF0QjtBQUdBLElBZmlCLENBZWhCLElBZmdCLENBZVgsSUFmVyxDQUFsQjs7QUFpQkEsVUFBTyxFQUFQLENBQVUsS0FBVixFQUFpQixZQUFZO0FBQzNCLFFBQUksT0FBTyxTQUFTLHNCQUFULENBQWdDLGdCQUFoQyxFQUFrRCxDQUFsRCxDQUFYO0FBQ0EsU0FBSyxpQkFBTCxDQUF1QixJQUF2QixFQUE2QixTQUE3QjtBQUNBLFlBQVEsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFSO0FBQ0EsV0FBTyxLQUFQO0FBQ0E7QUFDQSxXQUFPLElBQVAsQ0FBWSxPQUFaLEVBQXFCLEtBQXJCO0FBQ0EsV0FBTyxjQUFQLENBQXNCLEtBQXRCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLFFBQXZCO0FBQ0QsSUFUZ0IsQ0FTZixJQVRlLENBU1YsSUFUVSxDQUFqQjs7QUFXQTtBQUNBO0FBRUE7OztzQ0FFbUI7QUFDbkIsV0FBUSxHQUFSLENBQVksc0JBQVo7QUFDQSxRQUFLLEtBQUwsR0FBYSxZQUFZLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxJQUFmLENBQVosRUFBa0MsSUFBbEMsQ0FBYjtBQUNBOzs7b0NBRW9CLEksRUFBTSxTLEVBQVc7QUFDbkMsT0FBSSxhQUFhLFNBQVMsV0FBVCxDQUFzQixhQUF0QixDQUFqQjtBQUNBLGNBQVcsU0FBWCxDQUFzQixTQUF0QixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QztBQUNBLFFBQUssYUFBTCxDQUFvQixVQUFwQjtBQUNGOzs7eUJBQ087QUFDTixRQUFLLFFBQUwsQ0FBYyxFQUFDLGVBQWUsS0FBSyxLQUFMLENBQVcsYUFBWCxHQUEyQixDQUEzQyxFQUFkO0FBQ0EsV0FBUSxHQUFSLENBQVksV0FBVyxLQUFLLEtBQUwsQ0FBVyxhQUFsQztBQUNDLE9BQUksS0FBSyxLQUFMLENBQVcsYUFBWCxJQUE0QixDQUFoQyxFQUFtQztBQUNsQyxrQkFBYyxLQUFLLEtBQW5CO0FBQ0EsU0FBSyxRQUFMLENBQWMsRUFBQyxlQUFlLE9BQWhCLEVBQWQ7QUFDQSxlQUFXLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUFYLEVBQTBDLElBQTFDO0FBQ0M7QUFDRDtBQUNGOzs7a0NBRWM7QUFDZixZQUFTLHNCQUFULENBQWdDLGtCQUFoQyxFQUFvRCxDQUFwRCxFQUF1RCxLQUF2RCxDQUE2RCxPQUE3RCxHQUF1RSxNQUF2RTtBQUNBOzs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVcsZ0JBQWhCO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSx5QkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsUUFBZjtBQUFBO0FBQWdDLGFBQU8sTUFBdkM7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFBQTtBQUE2QixXQUFLLEtBQUwsQ0FBVyxhQUF4QztBQUFBO0FBQUE7QUFGRCxLQUREO0FBS0UsU0FBSyxLQUFMLENBQVcsVUFBWCxHQUF3Qiw4QkFBQyxLQUFELE9BQXhCLEdBQW9DO0FBTHRDLElBREQ7QUFVQTs7OztFQXhGbUMsZ0JBQU0sUzs7a0JBQXRCLE8iLCJmaWxlIjoiZHJhd2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbnZhciBCb2FyZCA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9XCIzNzVcIiBoZWlnaHQ9XCIzNzVcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuIFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2UsXG5cdFx0XHRyZW1haW5pbmdUaW1lOiA0XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2Vcblx0XHR9KVxuXG5cdFx0Ly8gY3JlYXRlIGNhbnZhc1xuXHRcdHZhciBpbWFnZSA9IG51bGw7XG5cdFx0dmFyIGNhbnZhcyA9IG51bGw7XG5cblxuXHRcdHNvY2tldC5vbignZHJhdycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRyYXdDYW52YXM6IHRydWVcblx0XHRcdH0pXG5cblx0XHRcdGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjYW52YXMnLCB7XG5cdFx0XHQgIGlzRHJhd2luZ01vZGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzZXQgYnJ1c2ggc2l6ZVxuXHRcdFx0Y2FudmFzLmZyZWVEcmF3aW5nQnJ1c2gud2lkdGggPSAxMDtcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZHJhdycpO1xuXG5cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c29ja2V0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0ICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYXdpbmdXcmFwcGVyJylbMF1cblx0XHQgIHRoaXMudHJpZ2dlck1vdXNlRXZlbnQobm9kZSwgJ21vdXNldXAnKVxuXHRcdCAgaW1hZ2UgPSBKU09OLnN0cmluZ2lmeShjYW52YXMpO1xuXHRcdCAgY2FudmFzLmNsZWFyKCk7XG5cdFx0ICAvL3NlbmQgaW1hZ2UgdG8gc2VydmVyXG5cdFx0ICBzb2NrZXQuZW1pdCgnaW1hZ2UnLCBpbWFnZSk7IFxuXHRcdCAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdlbmQnKTtcblx0XHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvdm90ZScgXHRcdFx0ICBcdFxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHQvLyBzdGFydCB0aGUgY291bnRkb3duXG5cdFx0Ly8gdGhpcy5jb3VudERvd24oKTtcblx0XHRcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnNvbGUubG9nKCdjb3VudGRvd24gc3RhcnRlZC4uLicpO1xuXHRcdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnRpY2suYmluZCh0aGlzKSwgMTAwMClcblx0fVxuXG4gICB0cmlnZ2VyTW91c2VFdmVudCAobm9kZSwgZXZlbnRUeXBlKSB7XG4gICAgdmFyIGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCAoJ01vdXNlRXZlbnRzJyk7XG4gICAgY2xpY2tFdmVudC5pbml0RXZlbnQgKGV2ZW50VHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50IChjbGlja0V2ZW50KTtcblx0fVxuICB0aWNrKCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6IHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSAtIDF9KTtcbiAgXHRjb25zb2xlLmxvZygndGljazogJyArIHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSk7XG4gICAgaWYgKHRoaXMuc3RhdGUucmVtYWluaW5nVGltZSA8PSAxKSB7XG4gICAgXHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogJ0RyYXchJ30pO1xuICAgIFx0c2V0VGltZW91dCh0aGlzLmhpZGVDb3VudERvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICA7XG4gICAgfVxuICB9XG5cblx0aGlkZUNvdW50RG93bigpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcmF3aW5nQ291bnRkb3duJylbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9IFwiZHJhd2luZ1dyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2RyYXdpbmdDb3VudGRvd24gdmFsaWduJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb21wdFwiPkRyYXcgYSB7d2luZG93LkFuaW1hbH0gaW4uLi48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93blwiPiB7dGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lfSA8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmRyYXdDYW52YXMgPyA8Qm9hcmQgLz4gOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuIl19