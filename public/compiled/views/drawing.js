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
			console.log('countdown componentWillMount: ' + this.state.myCountDown);
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
			}.bind(this));

			socket.on('end', function () {
				//send image to server
				socket.emit('image', image);
				window.location.href = '#/vote';
			});

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
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timer);
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
				null,
				_react2.default.createElement(
					"div",
					{ className: "drawingCountdown" },
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
//# sourceMappingURL=data:application/json;base64,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ZHJhd2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbnZhciBCb2FyZCA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8Y2FudmFzIGlkPVwiY2FudmFzXCIgd2lkdGg9XCIzNzVcIiBoZWlnaHQ9XCIzNzVcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZSxcblx0XHRcdHJlbWFpbmluZ1RpbWU6IDRcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2NvdW50ZG93biBjb21wb25lbnRXaWxsTW91bnQ6ICcgKyB0aGlzLnN0YXRlLm15Q291bnREb3duKTtcblx0XHQvLyBjcmVhdGUgY2FudmFzXG5cdFx0dmFyIGltYWdlID0gbnVsbDtcblxuXG5cdFx0c29ja2V0Lm9uKCdkcmF3JywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZHJhd0NhbnZhczogdHJ1ZVxuXHRcdFx0fSlcblxuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjYW52YXMnLCB7XG5cdFx0XHQgIGlzRHJhd2luZ01vZGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzZXQgYnJ1c2ggc2l6ZVxuXHRcdFx0Y2FudmFzLmZyZWVEcmF3aW5nQnJ1c2gud2lkdGggPSAxMDtcblxuXHRcdCAgLy9yZWRpcmVjdCB0byBkcmF3IHZpZXdcblx0XHQgIGNhbnZhcy5vbigncGF0aDpjcmVhdGVkJywgZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdCAgICBpbWFnZSA9IEpTT04uc3RyaW5naWZ5KGNhbnZhcyk7XG5cdFx0ICAgIC8vIGNvbnNvbGUubG9nKCdTYXZpbmcgZHJhd2luZyB0byBpbWFnZSB2YXJpYWJsZS4uLicpO1xuXHRcdCAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjYW52YXMpKTtcblx0XHQgIH0pO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRzb2NrZXQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHQgIC8vc2VuZCBpbWFnZSB0byBzZXJ2ZXJcblx0XHQgIHNvY2tldC5lbWl0KCdpbWFnZScsIGltYWdlKTsgXG5cdFx0ICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3ZvdGUnIFxuXHRcdH0pO1xuXG5cdFx0Ly8gc3RhcnQgdGhlIGNvdW50ZG93blxuXHRcdC8vIHRoaXMuY291bnREb3duKCk7XG5cdFx0XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zb2xlLmxvZygnY291bnRkb3duIHN0YXJ0ZWQuLi4nKTtcblx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDApXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHR9XG5cbiAgdGljaygpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtyZW1haW5pbmdUaW1lOiB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgLSAxfSk7XG4gIFx0Y29uc29sZS5sb2coJ3RpY2s6ICcgKyB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUpO1xuICAgIGlmICh0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgPD0gMSkge1xuICAgIFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICBcdHRoaXMuc2V0U3RhdGUoe3JlbWFpbmluZ1RpbWU6ICdEcmF3ISd9KTtcbiAgICBcdHNldFRpbWVvdXQodGhpcy5oaWRlQ291bnREb3duLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgO1xuICAgIH1cbiAgfVxuXG5cdGhpZGVDb3VudERvd24oKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJhd2luZ0NvdW50ZG93bicpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkcmF3aW5nQ291bnRkb3duJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb21wdFwiPkRyYXcgYSB7d2luZG93LkFuaW1hbH0gaW4uLi48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93blwiPiB7dGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lfSA8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmRyYXdDYW52YXMgPyA8Qm9hcmQgLz4gOiBudWxsfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdClcblx0fVxufVxuIl19