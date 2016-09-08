'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vote = function (_React$Component) {
	_inherits(Vote, _React$Component);

	function Vote(props) {
		_classCallCheck(this, Vote);

		return _possibleConstructorReturn(this, (Vote.__proto__ || Object.getPrototypeOf(Vote)).call(this, props));
	}

	_createClass(Vote, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			socket.on('vote', function (images) {
				//redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				this.renderDrawings(images);
			});
		}
	}, {
		key: 'renderDrawings',
		value: function renderDrawings(arr) {
			arr.forEach(function (pic) {

				canvas.loadFromJSON(pic, function (blob) {
					var image = new Image();
					image.src = blob.toDataUrl("image/png");
					document.getElementById('vote').appendChild(image);

					//place image on canvas/page appropriately
				});
				//canvas.renderAll.bind(canvas)
			});
		}
	}, {
		key: 'render',
		value: function render() {
			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement('div', { id: 'vote' });
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3ZvdGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFDcEIsZUFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1osS0FEWTtBQUVsQjs7Ozt1Q0FFb0I7QUFDcEIsVUFBTyxFQUFQLENBQVUsTUFBVixFQUFrQixVQUFVLE1BQVYsRUFBa0I7QUFDbEM7QUFDQTtBQUNBLFNBQUssY0FBTCxDQUFvQixNQUFwQjtBQUNELElBSkQ7QUFLQTs7O2lDQUVjLEcsRUFBSTtBQUNsQixPQUFJLE9BQUosQ0FBWSxVQUFTLEdBQVQsRUFBYzs7QUFFdkIsV0FBTyxZQUFQLENBQXFCLEdBQXJCLEVBQTBCLFVBQVMsSUFBVCxFQUFlO0FBQ3hDLFNBQUksUUFBUSxJQUFJLEtBQUosRUFBWjtBQUNBLFdBQU0sR0FBTixHQUFZLEtBQUssU0FBTCxDQUFlLFdBQWYsQ0FBWjtBQUNBLGNBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQyxXQUFoQyxDQUE0QyxLQUE1Qzs7QUFFQTtBQUNBLEtBTkQ7QUFPRjtBQUNBLElBVkQ7QUFZQTs7OzJCQUVRO0FBQ1I7QUFDQSxVQUNDLHVDQUFLLElBQUcsTUFBUixHQUREO0FBT0E7Ozs7RUFyQ2dDLGdCQUFNLFM7O2tCQUFuQixJIiwiZmlsZSI6InZvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZvdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHNvY2tldC5vbigndm90ZScsIGZ1bmN0aW9uIChpbWFnZXMpIHtcblx0XHQgIC8vcmVkaXJlY3QgdG8gdm90aW5nIHZpZXdcblx0XHQgIC8vIGltYWdlcyBpcyBhbiBhcnJheSBvZiBKU09OLnN0cmluZ2lmeShjYW52YXMpIG9iamVjdHMgdG8gdm90ZSBvblxuXHRcdCAgdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyRHJhd2luZ3MoYXJyKXtcblx0XHRhcnIuZm9yRWFjaChmdW5jdGlvbihwaWMpIHtcblxuXHRcdCAgXHRjYW52YXMubG9hZEZyb21KU09OKCBwaWMsIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHQgIFx0XHRpbWFnZS5zcmMgPSBibG9iLnRvRGF0YVVybChcImltYWdlL3BuZ1wiKTtcblx0XHQgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm90ZScpLmFwcGVuZENoaWxkKGltYWdlKTtcblxuXHRcdCAgXHRcdC8vcGxhY2UgaW1hZ2Ugb24gY2FudmFzL3BhZ2UgYXBwcm9wcmlhdGVseVxuXHRcdCAgXHR9KTtcblx0XHRcdC8vY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHR9KVxuXG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdC8vTmVlZCB0byBkZWNpZGUgaWYgd2UgdXNlIG9uZSBiaWcgY2FudmFzLCBvciBqdXN0IHJlbmRlciBpbWFnZXMgb2YgYWxsIHRoZSBkcmF3aW5nc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwidm90ZVwiPlxuXHRcdFx0PC9kaXY+XG5cblxuXG5cdFx0XHQpXG5cdH1cbn1cblxuIl19