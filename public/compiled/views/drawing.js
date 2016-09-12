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
							{ className: "giveAnimal" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxTQUFSLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLEtBQTFCLEVBQWdDLFFBQU8sS0FBdkM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFPcUIsTzs7O0FBQ3BCLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVksS0FEQTtBQUVaLGtCQUFlO0FBRkgsR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FFb0I7QUFDcEIsUUFBSyxRQUFMLENBQWM7QUFDYixnQkFBWTtBQURDLElBQWQ7O0FBSUE7QUFDQSxPQUFJLFFBQVEsSUFBWjtBQUNBLE9BQUksU0FBUyxJQUFiOztBQUdBLFVBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTs7QUFFN0IsU0FBSyxRQUFMLENBQWM7QUFDYixpQkFBWTtBQURDLEtBQWQ7O0FBSUEsYUFBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixRQUFsQixFQUE0QjtBQUNuQyxvQkFBZTtBQURvQixLQUE1QixDQUFUOztBQUlBO0FBQ0EsV0FBTyxnQkFBUCxDQUF3QixLQUF4QixHQUFnQyxFQUFoQztBQUNBLFdBQU8sY0FBUCxDQUFzQixNQUF0QjtBQUdBLElBZmlCLENBZWhCLElBZmdCLENBZVgsSUFmVyxDQUFsQjs7QUFpQkEsVUFBTyxFQUFQLENBQVUsS0FBVixFQUFpQixZQUFZO0FBQzNCLFFBQUksT0FBTyxTQUFTLHNCQUFULENBQWdDLGdCQUFoQyxFQUFrRCxDQUFsRCxDQUFYO0FBQ0EsU0FBSyxpQkFBTCxDQUF1QixJQUF2QixFQUE2QixTQUE3QjtBQUNBLFlBQVEsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFSO0FBQ0EsV0FBTyxLQUFQO0FBQ0E7QUFDQSxXQUFPLElBQVAsQ0FBWSxPQUFaLEVBQXFCLEtBQXJCO0FBQ0EsV0FBTyxjQUFQLENBQXNCLEtBQXRCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLFFBQXZCO0FBQ0QsSUFUZ0IsQ0FTZixJQVRlLENBU1YsSUFUVSxDQUFqQjs7QUFXQTtBQUNBO0FBRUE7OztzQ0FFbUI7QUFDbkIsV0FBUSxHQUFSLENBQVksc0JBQVo7QUFDQSxRQUFLLEtBQUwsR0FBYSxZQUFZLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxJQUFmLENBQVosRUFBa0MsSUFBbEMsQ0FBYjtBQUNBOzs7b0NBRW9CLEksRUFBTSxTLEVBQVc7QUFDbkMsT0FBSSxhQUFhLFNBQVMsV0FBVCxDQUFzQixhQUF0QixDQUFqQjtBQUNBLGNBQVcsU0FBWCxDQUFzQixTQUF0QixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QztBQUNBLFFBQUssYUFBTCxDQUFvQixVQUFwQjtBQUNGOzs7eUJBQ087QUFDTixRQUFLLFFBQUwsQ0FBYyxFQUFDLGVBQWUsS0FBSyxLQUFMLENBQVcsYUFBWCxHQUEyQixDQUEzQyxFQUFkO0FBQ0EsV0FBUSxHQUFSLENBQVksV0FBVyxLQUFLLEtBQUwsQ0FBVyxhQUFsQztBQUNDLE9BQUksS0FBSyxLQUFMLENBQVcsYUFBWCxJQUE0QixDQUFoQyxFQUFtQztBQUNsQyxrQkFBYyxLQUFLLEtBQW5CO0FBQ0EsU0FBSyxRQUFMLENBQWMsRUFBQyxlQUFlLE9BQWhCLEVBQWQ7QUFDQSxlQUFXLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUFYLEVBQTBDLElBQTFDO0FBQ0M7QUFDRDtBQUNGOzs7a0NBRWM7QUFDZixZQUFTLHNCQUFULENBQWdDLGtCQUFoQyxFQUFvRCxDQUFwRCxFQUF1RCxLQUF2RCxDQUE2RCxPQUE3RCxHQUF1RSxNQUF2RTtBQUNBOzs7MkJBRVE7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVcsZ0JBQWhCO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSx5QkFBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsUUFBZjtBQUFBO0FBQStCO0FBQUE7QUFBQSxTQUFNLFdBQVUsWUFBaEI7QUFBOEIsY0FBTztBQUFyQyxPQUEvQjtBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUFBO0FBQTZCLFdBQUssS0FBTCxDQUFXLGFBQXhDO0FBQUE7QUFBQTtBQUZELEtBREQ7QUFLRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLEdBQXdCLDhCQUFDLEtBQUQsT0FBeEIsR0FBb0M7QUFMdEMsSUFERDtBQVVBOzs7O0VBeEZtQyxnQkFBTSxTOztrQkFBdEIsTyIsImZpbGUiOiJkcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xudmFyIEJvYXJkID0gKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD1cIjM3NVwiIGhlaWdodD1cIjM3NVwiPjwvY2FudmFzPlxuXHRcdDwvZGl2PlxuXHQpXG4gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZSxcblx0XHRcdHJlbWFpbmluZ1RpbWU6IDNcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZVxuXHRcdH0pXG5cblx0XHQvLyBjcmVhdGUgY2FudmFzXG5cdFx0dmFyIGltYWdlID0gbnVsbDtcblx0XHR2YXIgY2FudmFzID0gbnVsbDtcblxuXG5cdFx0c29ja2V0Lm9uKCdkcmF3JywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZHJhd0NhbnZhczogdHJ1ZVxuXHRcdFx0fSlcblxuXHRcdFx0Y2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2NhbnZhcycsIHtcblx0XHRcdCAgaXNEcmF3aW5nTW9kZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHNldCBicnVzaCBzaXplXG5cdFx0XHRjYW52YXMuZnJlZURyYXdpbmdCcnVzaC53aWR0aCA9IDEwO1xuXHRcdFx0c29ja2V0LnJlbW92ZUxpc3RlbmVyKCdkcmF3Jyk7XG5cblxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRzb2NrZXQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHQgIHZhciBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhd2luZ1dyYXBwZXInKVswXVxuXHRcdCAgdGhpcy50cmlnZ2VyTW91c2VFdmVudChub2RlLCAnbW91c2V1cCcpXG5cdFx0ICBpbWFnZSA9IEpTT04uc3RyaW5naWZ5KGNhbnZhcyk7XG5cdFx0ICBjYW52YXMuY2xlYXIoKTtcblx0XHQgIC8vc2VuZCBpbWFnZSB0byBzZXJ2ZXJcblx0XHQgIHNvY2tldC5lbWl0KCdpbWFnZScsIGltYWdlKTsgXG5cdFx0ICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2VuZCcpO1xuXHRcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy92b3RlJyBcdFx0XHQgIFx0XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIHN0YXJ0IHRoZSBjb3VudGRvd25cblx0XHQvLyB0aGlzLmNvdW50RG93bigpO1xuXHRcdFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2NvdW50ZG93biBzdGFydGVkLi4uJyk7XG5cdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMudGljay5iaW5kKHRoaXMpLCAxMDAwKVxuXHR9XG5cbiAgIHRyaWdnZXJNb3VzZUV2ZW50IChub2RlLCBldmVudFR5cGUpIHtcbiAgICB2YXIgY2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50ICgnTW91c2VFdmVudHMnKTtcbiAgICBjbGlja0V2ZW50LmluaXRFdmVudCAoZXZlbnRUeXBlLCB0cnVlLCB0cnVlKTtcbiAgICBub2RlLmRpc3BhdGNoRXZlbnQgKGNsaWNrRXZlbnQpO1xuXHR9XG4gIHRpY2soKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7cmVtYWluaW5nVGltZTogdGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lIC0gMX0pO1xuICBcdGNvbnNvbGUubG9nKCd0aWNrOiAnICsgdGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lIDw9IDApIHtcbiAgICBcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgXHR0aGlzLnNldFN0YXRlKHtyZW1haW5pbmdUaW1lOiAnRHJhdyEnfSk7XG4gICAgXHRzZXRUaW1lb3V0KHRoaXMuaGlkZUNvdW50RG93bi5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgIDtcbiAgICB9XG4gIH1cblxuXHRoaWRlQ291bnREb3duKCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RyYXdpbmdDb3VudGRvd24nKVswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0gXCJkcmF3aW5nV3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZHJhd2luZ0NvdW50ZG93biB2YWxpZ24nPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0XCI+RHJhdyBhIDxzcGFuIGNsYXNzTmFtZT1cImdpdmVBbmltYWxcIj57d2luZG93LkFuaW1hbH08L3NwYW4+IGluLi4uPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj4ge3RoaXMuc3RhdGUucmVtYWluaW5nVGltZX0gPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5kcmF3Q2FudmFzID8gPEJvYXJkIC8+IDogbnVsbH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQpXG5cdH1cbn1cbiJdfQ==