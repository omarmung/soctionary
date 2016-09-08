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
					console.log('Saving drawing to image variable...');
					console.log(JSON.stringify(canvas));
				});
			});

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL2RyYXdpbmcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUNBLElBQUksUUFBUSxTQUFSLEtBQVE7QUFBQSxRQUNYO0FBQUE7QUFBQTtBQUNDLDRDQUFRLElBQUcsUUFBWCxFQUFvQixPQUFNLE1BQTFCLEVBQWlDLFFBQU8sS0FBeEM7QUFERCxFQURXO0FBQUEsQ0FBWjs7SUFNcUIsTzs7O0FBQ3BCLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVk7QUFEQSxHQUFiO0FBRmtCO0FBS2xCOzs7O3VDQUVvQjs7QUFFcEI7QUFDQSxPQUFJLFFBQVEsSUFBWjs7QUFFQSxVQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFlBQVk7O0FBRTdCLFNBQUssUUFBTCxDQUFjO0FBQ2IsaUJBQVk7QUFEQyxLQUFkOztBQUlBLFFBQUksU0FBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixRQUFsQixFQUE0QjtBQUN2QyxvQkFBZTtBQUR3QixLQUE1QixDQUFiOztBQUlBO0FBQ0EsV0FBTyxnQkFBUCxDQUF3QixLQUF4QixHQUFnQyxFQUFoQzs7QUFFQztBQUNBLFdBQU8sRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBUyxPQUFULEVBQWtCO0FBQzFDLGFBQVEsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFSO0FBQ0EsYUFBUSxHQUFSLENBQVkscUNBQVo7QUFDQSxhQUFRLEdBQVIsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxNQUFmLENBQVo7QUFDRCxLQUpEO0FBS0QsSUFuQkQ7O0FBcUJBLFVBQU8sRUFBUCxDQUFVLEtBQVYsRUFBaUIsWUFBWTtBQUMzQjtBQUNBLFdBQU8sSUFBUCxDQUFZLE9BQVosRUFBcUIsS0FBckI7QUFDQSxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsUUFBdkI7QUFDRCxJQUpEO0FBS0E7OzsyQkFJUTtBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUssWUFBTztBQUFaLEtBREE7QUFFQyxTQUFLLEtBQUwsQ0FBVyxVQUFYLEdBQXdCLDhCQUFDLEtBQUQsT0FBeEIsR0FBb0M7QUFGckMsSUFERDtBQU9BOzs7O0VBbkRtQyxnQkFBTSxTOztrQkFBdEIsTyIsImZpbGUiOiJkcmF3aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xudmFyIEJvYXJkID0gKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxjYW52YXMgaWQ9XCJjYW52YXNcIiB3aWR0aD1cIjE0MDBcIiBoZWlnaHQ9XCI0ODBcIj48L2NhbnZhcz5cblx0XHQ8L2Rpdj5cblx0KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3aW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZHJhd0NhbnZhczogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBjcmVhdGUgY2FudmFzXG5cdFx0dmFyIGltYWdlID0gbnVsbDtcblxuXHRcdHNvY2tldC5vbignZHJhdycsIGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGRyYXdDYW52YXM6IHRydWVcblx0XHRcdH0pXG5cblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygnY2FudmFzJywge1xuXHRcdFx0ICBpc0RyYXdpbmdNb2RlOiB0cnVlXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gc2V0IGJydXNoIHNpemVcblx0XHRcdGNhbnZhcy5mcmVlRHJhd2luZ0JydXNoLndpZHRoID0gMTA7XG5cblx0XHQgIC8vcmVkaXJlY3QgdG8gZHJhdyB2aWV3XG5cdFx0ICBjYW52YXMub24oJ3BhdGg6Y3JlYXRlZCcsIGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHQgICAgaW1hZ2UgPSBKU09OLnN0cmluZ2lmeShjYW52YXMpO1xuXHRcdCAgICBjb25zb2xlLmxvZygnU2F2aW5nIGRyYXdpbmcgdG8gaW1hZ2UgdmFyaWFibGUuLi4nKTtcblx0XHQgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2FudmFzKSk7XG5cdFx0ICB9KTtcblx0XHR9KTtcblxuXHRcdHNvY2tldC5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdCAgLy9zZW5kIGltYWdlIHRvIHNlcnZlclxuXHRcdCAgc29ja2V0LmVtaXQoJ2ltYWdlJywgaW1hZ2UpOyBcblx0XHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvdm90ZScgXG5cdFx0fSk7XG5cdH1cblxuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PGgxPnt3aW5kb3cuQW5pbWFsfTwvaDE+XG5cdFx0XHR7dGhpcy5zdGF0ZS5kcmF3Q2FudmFzID8gPEJvYXJkIC8+IDogbnVsbH1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQpXG5cdH1cbn1cblxuXG5cblxuXG4iXX0=