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
		_react2.default.createElement("canvas", { id: "canvas", width: "1400", height: "480" })
	);
};

var Drawing = function (_React$Component) {
	_inherits(Drawing, _React$Component);

	function Drawing(props) {
		_classCallCheck(this, Drawing);

		var _this = _possibleConstructorReturn(this, (Drawing.__proto__ || Object.getPrototypeOf(Drawing)).call(this, props));

		_this.state = {
			drawCanvas: false
		};
		return _this;
	}

	_createClass(Drawing, [{
		key: "componentWillMount",
		value: function componentWillMount() {

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
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h1",
					null,
					window.Animal
				),
				this.state.drawCanvas ? _react2.default.createElement(Board, null) : null
			);
		}
	}]);

	return Drawing;
}(_react2.default.Component);

exports.default = Drawing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxTQUFSLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLE1BQTFCLEVBQWlDLFFBQU8sS0FBeEM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFNcUIsTzs7O0FBQ3BCLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVk7QUFEQSxHQUFiO0FBRmtCO0FBS2xCOzs7O3VDQUVvQjs7QUFFcEI7QUFDQSxPQUFJLFFBQVEsSUFBWjs7QUFFQSxVQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFlBQVk7O0FBRTdCLFNBQUssUUFBTCxDQUFjO0FBQ2IsaUJBQVk7QUFEQyxLQUFkOztBQUlBLFFBQUksU0FBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixRQUFsQixFQUE0QjtBQUN2QyxvQkFBZTtBQUR3QixLQUE1QixDQUFiOztBQUlBO0FBQ0EsV0FBTyxnQkFBUCxDQUF3QixLQUF4QixHQUFnQyxFQUFoQzs7QUFFQztBQUNBLFdBQU8sRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBUyxPQUFULEVBQWtCO0FBQzFDLGFBQVEsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFSO0FBQ0E7QUFDQTtBQUNELEtBSkQ7QUFLRCxJQW5CaUIsQ0FtQmhCLElBbkJnQixDQW1CWCxJQW5CVyxDQUFsQjs7QUFxQkEsVUFBTyxFQUFQLENBQVUsS0FBVixFQUFpQixZQUFZO0FBQzNCO0FBQ0EsV0FBTyxJQUFQLENBQVksT0FBWixFQUFxQixLQUFyQjtBQUNBLFdBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixRQUF2QjtBQUNELElBSkQ7QUFLQTs7OzJCQUlRO0FBQ1IsVUFDQztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBSyxZQUFPO0FBQVosS0FEQTtBQUVDLFNBQUssS0FBTCxDQUFXLFVBQVgsR0FBd0IsOEJBQUMsS0FBRCxPQUF4QixHQUFvQztBQUZyQyxJQUREO0FBT0E7Ozs7RUFuRG1DLGdCQUFNLFM7O2tCQUF0QixPIiwiZmlsZSI6ImRyYXdpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG52YXIgQm9hcmQgPSAoKSA9PiAoXG5cdDxkaXY+XG5cdFx0PGNhbnZhcyBpZD1cImNhbnZhc1wiIHdpZHRoPVwiMTQwMFwiIGhlaWdodD1cIjQ4MFwiPjwvY2FudmFzPlxuXHRcdDwvZGl2PlxuXHQpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkcmF3Q2FudmFzOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIGNyZWF0ZSBjYW52YXNcblx0XHR2YXIgaW1hZ2UgPSBudWxsO1xuXG5cdFx0c29ja2V0Lm9uKCdkcmF3JywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZHJhd0NhbnZhczogdHJ1ZVxuXHRcdFx0fSlcblxuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjYW52YXMnLCB7XG5cdFx0XHQgIGlzRHJhd2luZ01vZGU6IHRydWVcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBzZXQgYnJ1c2ggc2l6ZVxuXHRcdFx0Y2FudmFzLmZyZWVEcmF3aW5nQnJ1c2gud2lkdGggPSAxMDtcblxuXHRcdCAgLy9yZWRpcmVjdCB0byBkcmF3IHZpZXdcblx0XHQgIGNhbnZhcy5vbigncGF0aDpjcmVhdGVkJywgZnVuY3Rpb24ob3B0aW9ucykge1xuXHRcdCAgICBpbWFnZSA9IEpTT04uc3RyaW5naWZ5KGNhbnZhcyk7XG5cdFx0ICAgIC8vIGNvbnNvbGUubG9nKCdTYXZpbmcgZHJhd2luZyB0byBpbWFnZSB2YXJpYWJsZS4uLicpO1xuXHRcdCAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjYW52YXMpKTtcblx0XHQgIH0pO1xuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRzb2NrZXQub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHQgIC8vc2VuZCBpbWFnZSB0byBzZXJ2ZXJcblx0XHQgIHNvY2tldC5lbWl0KCdpbWFnZScsIGltYWdlKTsgXG5cdFx0ICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3ZvdGUnIFxuXHRcdH0pO1xuXHR9XG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdDxoMT57d2luZG93LkFuaW1hbH08L2gxPlxuXHRcdFx0e3RoaXMuc3RhdGUuZHJhd0NhbnZhcyA/IDxCb2FyZCAvPiA6IG51bGx9XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0KVxuXHR9XG59XG5cblxuXG5cblxuIl19