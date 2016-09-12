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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxTQUFSLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLEtBQTFCLEVBQWdDLFFBQU8sS0FBdkM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFPcUIsTzs7O0FBQ3BCLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVksS0FEQTtBQUVaLGtCQUFlO0FBRkgsR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FFb0I7QUFDcEIsUUFBSyxRQUFMLENBQWM7QUFDYixnQkFBWTtBQURDLElBQWQ7O0FBSUE7QUFDQSxPQUFJLFFBQVEsSUFBWjtBQUNBLE9BQUksU0FBUyxJQUFiOztBQUdBLFVBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsWUFBWTs7QUFFN0IsU0FBSyxRQUFMLENBQWM7QUFDYixpQkFBWTtBQURDLEtBQWQ7O0FBSUEsYUFBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixRQUFsQixFQUE0QjtBQUNuQyxvQkFBZTtBQURvQixLQUE1QixDQUFUOztBQUlBO0FBQ0EsV0FBTyxnQkFBUCxDQUF3QixLQUF4QixHQUFnQyxFQUFoQztBQUNBLFdBQU8sY0FBUCxDQUFzQixNQUF0QjtBQUdBLElBZmlCLENBZWhCLElBZmdCLENBZVgsSUFmVyxDQUFsQjs7QUFpQkEsVUFBTyxFQUFQLENBQVUsS0FBVixFQUFpQixZQUFZO0FBQzNCLFlBQVEsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFSO0FBQ0EsV0FBTyxLQUFQO0FBQ0E7QUFDQSxXQUFPLElBQVAsQ0FBWSxPQUFaLEVBQXFCLEtBQXJCO0FBQ0EsV0FBTyxjQUFQLENBQXNCLEtBQXRCO0FBQ0EsV0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLFFBQXZCO0FBQ0QsSUFQZ0IsQ0FPZixJQVBlLENBT1YsSUFQVSxDQUFqQjs7QUFTQTtBQUNBO0FBRUE7OztzQ0FFbUI7QUFDbkIsV0FBUSxHQUFSLENBQVksc0JBQVo7QUFDQSxRQUFLLEtBQUwsR0FBYSxZQUFZLEtBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxJQUFmLENBQVosRUFBa0MsSUFBbEMsQ0FBYjtBQUNBOztBQUVEO0FBQ0E7QUFDQTs7Ozt5QkFFUTtBQUNOLFFBQUssUUFBTCxDQUFjLEVBQUMsZUFBZSxLQUFLLEtBQUwsQ0FBVyxhQUFYLEdBQTJCLENBQTNDLEVBQWQ7QUFDQSxXQUFRLEdBQVIsQ0FBWSxXQUFXLEtBQUssS0FBTCxDQUFXLGFBQWxDO0FBQ0MsT0FBSSxLQUFLLEtBQUwsQ0FBVyxhQUFYLElBQTRCLENBQWhDLEVBQW1DO0FBQ2xDLGtCQUFjLEtBQUssS0FBbkI7QUFDQSxTQUFLLFFBQUwsQ0FBYyxFQUFDLGVBQWUsT0FBaEIsRUFBZDtBQUNBLGVBQVcsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQVgsRUFBMEMsSUFBMUM7QUFDQztBQUNEO0FBQ0Y7OztrQ0FFYztBQUNmLFlBQVMsc0JBQVQsQ0FBZ0Msa0JBQWhDLEVBQW9ELENBQXBELEVBQXVELEtBQXZELENBQTZELE9BQTdELEdBQXVFLE1BQXZFO0FBQ0E7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVyxnQkFBaEI7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLHlCQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxRQUFmO0FBQUE7QUFBZ0MsYUFBTyxNQUF2QztBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUFBO0FBQTZCLFdBQUssS0FBTCxDQUFXLGFBQXhDO0FBQUE7QUFBQTtBQUZELEtBREQ7QUFLRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLEdBQXdCLDhCQUFDLEtBQUQsT0FBeEIsR0FBb0M7QUFMdEMsSUFERDtBQVVBOzs7O0VBckZtQyxnQkFBTSxTOztrQkFBdEIsTyIsImZpbGUiOiJkcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xudmFyIEJvYXJkID0gKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD1cIjM3NVwiIGhlaWdodD1cIjM3NVwiPjwvY2FudmFzPlxuXHRcdDwvZGl2PlxuXHQpXG4gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZSxcblx0XHRcdHJlbWFpbmluZ1RpbWU6IDRcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZVxuXHRcdH0pXG5cblx0XHQvLyBjcmVhdGUgY2FudmFzXG5cdFx0dmFyIGltYWdlID0gbnVsbDtcblx0XHR2YXIgY2FudmFzID0gbnVsbDtcblxuXG5cdFx0c29ja2V0Lm9uKCdkcmF3JywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZHJhd0NhbnZhczogdHJ1ZVxuXHRcdFx0fSlcblxuXHRcdFx0Y2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2NhbnZhcycsIHtcblx0XHRcdCAgaXNEcmF3aW5nTW9kZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHNldCBicnVzaCBzaXplXG5cdFx0XHRjYW52YXMuZnJlZURyYXdpbmdCcnVzaC53aWR0aCA9IDEwO1xuXHRcdFx0c29ja2V0LnJlbW92ZUxpc3RlbmVyKCdkcmF3Jyk7XG5cblxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRzb2NrZXQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHQgIGltYWdlID0gSlNPTi5zdHJpbmdpZnkoY2FudmFzKTtcblx0XHQgIGNhbnZhcy5jbGVhcigpO1xuXHRcdCAgLy9zZW5kIGltYWdlIHRvIHNlcnZlclxuXHRcdCAgc29ja2V0LmVtaXQoJ2ltYWdlJywgaW1hZ2UpOyBcblx0XHQgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZW5kJyk7XG5cdFx0ICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3ZvdGUnIFx0XHRcdCAgXHRcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gc3RhcnQgdGhlIGNvdW50ZG93blxuXHRcdC8vIHRoaXMuY291bnREb3duKCk7XG5cdFx0XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zb2xlLmxvZygnY291bnRkb3duIHN0YXJ0ZWQuLi4nKTtcblx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApXG5cdH1cblxuXHQvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0Ly8gXHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHQvLyB9XG5cbiAgdGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtyZW1haW5pbmdUaW1lOiB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgLSAxfSk7XG4gIFx0Y29uc29sZS5sb2coJ3RpY2s6ICcgKyB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUpO1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgPD0gMSkge1xuICAgIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6ICdEcmF3ISd9KTtcbiAgICBcdHNldFRpbWVvdXQodGhpcy5oaWRlQ291bnREb3duLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgO1xuICAgIH1cbiAgfVxuXG5cdGhpZGVDb3VudERvd24oKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhd2luZ0NvdW50ZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSBcImRyYXdpbmdXcmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcmF3aW5nQ291bnRkb3duIHZhbGlnbic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9tcHRcIj5EcmF3IGEge3dpbmRvdy5BbmltYWx9IGluLi4uPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj4ge3RoaXMuc3RhdGUucmVtYWluaW5nVGltZX0gPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5kcmF3Q2FudmFzID8gPEJvYXJkIC8+IDogbnVsbH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQpXG5cdH1cbn1cbiJdfQ==