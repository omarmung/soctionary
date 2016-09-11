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
				console.log(image);
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
//# sourceMappingURL=data:application/json;base64,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Rm1DLGdCQUFNLFM7O2tCQUF0QixPIiwiZmlsZSI6ImRyYXdpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG52YXIgQm9hcmQgPSAoKSA9PiAoXG5cdDxkaXY+XG5cdFx0PGNhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPVwiMzc1XCIgaGVpZ2h0PVwiMzc1XCI+PC9jYW52YXM+XG5cdFx0PC9kaXY+XG5cdClcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2UsXG5cdFx0XHRyZW1haW5pbmdUaW1lOiA0XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2Vcblx0XHR9KVxuXG5cdFx0Ly8gY3JlYXRlIGNhbnZhc1xuXHRcdHZhciBpbWFnZSA9IG51bGw7XG5cdFx0dmFyIGNhbnZhcyA9IG51bGw7XG5cblxuXHRcdHNvY2tldC5vbignZHJhdycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRyYXdDYW52YXM6IHRydWVcblx0XHRcdH0pXG5cblx0XHRcdGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjYW52YXMnLCB7XG5cdFx0XHQgIGlzRHJhd2luZ01vZGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzZXQgYnJ1c2ggc2l6ZVxuXHRcdFx0Y2FudmFzLmZyZWVEcmF3aW5nQnJ1c2gud2lkdGggPSAxMDtcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZHJhdycpO1xuXG5cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c29ja2V0Lm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0ICBpbWFnZSA9IEpTT04uc3RyaW5naWZ5KGNhbnZhcyk7XG5cdFx0ICBjYW52YXMuY2xlYXIoKTtcblx0XHQgIC8vc2VuZCBpbWFnZSB0byBzZXJ2ZXJcblx0XHQgIGNvbnNvbGUubG9nKGltYWdlKVxuXHRcdCAgc29ja2V0LmVtaXQoJ2ltYWdlJywgaW1hZ2UpOyBcblx0XHQgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcignZW5kJyk7XG5cdFx0ICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3ZvdGUnIFx0XHRcdCAgXHRcblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gc3RhcnQgdGhlIGNvdW50ZG93blxuXHRcdC8vIHRoaXMuY291bnREb3duKCk7XG5cdFx0XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zb2xlLmxvZygnY291bnRkb3duIHN0YXJ0ZWQuLi4nKTtcblx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApXG5cdH1cblxuXHQvLyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0Ly8gXHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHQvLyB9XG5cbiAgdGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtyZW1haW5pbmdUaW1lOiB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgLSAxfSk7XG4gIFx0Y29uc29sZS5sb2coJ3RpY2s6ICcgKyB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUpO1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgPD0gMSkge1xuICAgIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6ICdEcmF3ISd9KTtcbiAgICBcdHNldFRpbWVvdXQodGhpcy5oaWRlQ291bnREb3duLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgO1xuICAgIH1cbiAgfVxuXG5cdGhpZGVDb3VudERvd24oKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhd2luZ0NvdW50ZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcmF3aW5nQ291bnRkb3duIHZhbGlnbic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwcm9tcHRcIj5EcmF3IGEge3dpbmRvdy5BbmltYWx9IGluLi4uPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd25cIj4ge3RoaXMuc3RhdGUucmVtYWluaW5nVGltZX0gPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5kcmF3Q2FudmFzID8gPEJvYXJkIC8+IDogbnVsbH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQpXG5cdH1cbn1cbiJdfQ==