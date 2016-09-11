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

				//redirect to draw view
				canvas.on('path:created', function (options) {
					image = JSON.stringify(canvas);
					// console.log('Saving drawing to image variable...');
					// console.log(JSON.stringify(canvas));
				});

				socket.on('end', function () {
					//send image to server

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxTQUFSLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLEtBQTFCLEVBQWdDLFFBQU8sS0FBdkM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFPcUIsTzs7O0FBQ3BCLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVksS0FEQTtBQUVaLGtCQUFlO0FBRkgsR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FFb0I7QUFDcEIsUUFBSyxRQUFMLENBQWM7QUFDYixnQkFBWTtBQURDLElBQWQ7O0FBSUE7QUFDQSxPQUFJLFFBQVEsSUFBWjs7QUFHQSxVQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFlBQVk7O0FBRTdCLFNBQUssUUFBTCxDQUFjO0FBQ2IsaUJBQVk7QUFEQyxLQUFkOztBQUlBLFFBQUksU0FBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixRQUFsQixFQUE0QjtBQUN2QyxvQkFBZTtBQUR3QixLQUE1QixDQUFiOztBQUlBO0FBQ0EsV0FBTyxnQkFBUCxDQUF3QixLQUF4QixHQUFnQyxFQUFoQzs7QUFFQztBQUNBLFdBQU8sRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBUyxPQUFULEVBQWtCO0FBQzFDLGFBQVEsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFSO0FBQ0E7QUFDQTtBQUNELEtBSkQ7O0FBTUQsV0FBTyxFQUFQLENBQVUsS0FBVixFQUFpQixZQUFZO0FBQzNCOztBQUVBLFlBQU8sSUFBUCxDQUFZLE9BQVosRUFBcUIsS0FBckI7QUFDQSxZQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsUUFBdkI7QUFDRCxLQUxnQixDQUtmLElBTGUsQ0FLVixJQUxVLENBQWpCO0FBTUEsSUExQmlCLENBMEJoQixJQTFCZ0IsQ0EwQlgsSUExQlcsQ0FBbEI7O0FBNkJBO0FBQ0E7QUFFQTs7O3NDQUVtQjtBQUNuQixXQUFRLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLFFBQUssS0FBTCxHQUFhLFlBQVksS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLElBQWYsQ0FBWixFQUFrQyxJQUFsQyxDQUFiO0FBQ0E7O0FBRUQ7QUFDQTtBQUNBOzs7O3lCQUVRO0FBQ04sUUFBSyxRQUFMLENBQWMsRUFBQyxlQUFlLEtBQUssS0FBTCxDQUFXLGFBQVgsR0FBMkIsQ0FBM0MsRUFBZDtBQUNBLFdBQVEsR0FBUixDQUFZLFdBQVcsS0FBSyxLQUFMLENBQVcsYUFBbEM7QUFDQyxPQUFJLEtBQUssS0FBTCxDQUFXLGFBQVgsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDbEMsa0JBQWMsS0FBSyxLQUFuQjtBQUNBLFNBQUssUUFBTCxDQUFjLEVBQUMsZUFBZSxPQUFoQixFQUFkO0FBQ0EsZUFBVyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBWCxFQUEwQyxJQUExQztBQUNDO0FBQ0Q7QUFDRjs7O2tDQUVjO0FBQ2YsWUFBUyxzQkFBVCxDQUFnQyxrQkFBaEMsRUFBb0QsQ0FBcEQsRUFBdUQsS0FBdkQsQ0FBNkQsT0FBN0QsR0FBdUUsTUFBdkU7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLHlCQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxRQUFmO0FBQUE7QUFBZ0MsYUFBTyxNQUF2QztBQUFBO0FBQUEsTUFERDtBQUVDO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUFBO0FBQTZCLFdBQUssS0FBTCxDQUFXLGFBQXhDO0FBQUE7QUFBQTtBQUZELEtBREQ7QUFLRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLEdBQXdCLDhCQUFDLEtBQUQsT0FBeEIsR0FBb0M7QUFMdEMsSUFERDtBQVVBOzs7O0VBdkZtQyxnQkFBTSxTOztrQkFBdEIsTyIsImZpbGUiOiJkcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xudmFyIEJvYXJkID0gKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD1cIjM3NVwiIGhlaWdodD1cIjM3NVwiPjwvY2FudmFzPlxuXHRcdDwvZGl2PlxuXHQpXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2luZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRyYXdDYW52YXM6IGZhbHNlLFxuXHRcdFx0cmVtYWluaW5nVGltZTogNFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGRyYXdDYW52YXM6IGZhbHNlXG5cdFx0fSlcblxuXHRcdC8vIGNyZWF0ZSBjYW52YXNcblx0XHR2YXIgaW1hZ2UgPSBudWxsO1xuXG5cblx0XHRzb2NrZXQub24oJ2RyYXcnLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkcmF3Q2FudmFzOiB0cnVlXG5cdFx0XHR9KVxuXG5cdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ2NhbnZhcycsIHtcblx0XHRcdCAgaXNEcmF3aW5nTW9kZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHNldCBicnVzaCBzaXplXG5cdFx0XHRjYW52YXMuZnJlZURyYXdpbmdCcnVzaC53aWR0aCA9IDEwO1xuXG5cdFx0ICAvL3JlZGlyZWN0IHRvIGRyYXcgdmlld1xuXHRcdCAgY2FudmFzLm9uKCdwYXRoOmNyZWF0ZWQnLCBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0ICAgIGltYWdlID0gSlNPTi5zdHJpbmdpZnkoY2FudmFzKTtcblx0XHQgICAgLy8gY29uc29sZS5sb2coJ1NhdmluZyBkcmF3aW5nIHRvIGltYWdlIHZhcmlhYmxlLi4uJyk7XG5cdFx0ICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNhbnZhcykpO1xuXHRcdCAgfSk7XG5cblx0XHRcdHNvY2tldC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0ICAvL3NlbmQgaW1hZ2UgdG8gc2VydmVyXG5cblx0XHRcdCAgc29ja2V0LmVtaXQoJ2ltYWdlJywgaW1hZ2UpOyBcblx0XHRcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy92b3RlJyBcblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXG5cdFx0Ly8gc3RhcnQgdGhlIGNvdW50ZG93blxuXHRcdC8vIHRoaXMuY291bnREb3duKCk7XG5cdFx0XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zb2xlLmxvZygnY291bnRkb3duIHN0YXJ0ZWQuLi4nKTtcblx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApXG5cdH1cblxuXHQvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0Ly8gXHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHQvLyB9XG5cbiAgdGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtyZW1haW5pbmdUaW1lOiB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgLSAxfSk7XG4gIFx0Y29uc29sZS5sb2coJ3RpY2s6ICcgKyB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUpO1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgPD0gMSkge1xuICAgIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6ICdEcmF3ISd9KTtcbiAgICBcdHNldFRpbWVvdXQodGhpcy5oaWRlQ291bnREb3duLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgO1xuICAgIH1cbiAgfVxuXG5cdGhpZGVDb3VudERvd24oKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhd2luZ0NvdW50ZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcmF3aW5nQ291bnRkb3duIHZhbGlnbic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9tcHRcIj5EcmF3IGEge3dpbmRvdy5BbmltYWx9IGluLi4uPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj4ge3RoaXMuc3RhdGUucmVtYWluaW5nVGltZX0gPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5kcmF3Q2FudmFzID8gPEJvYXJkIC8+IDogbnVsbH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQpXG5cdH1cbn1cbiJdfQ==