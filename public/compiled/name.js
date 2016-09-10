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

var Name = function (_React$Component) {
	_inherits(Name, _React$Component);

	function Name(props) {
		_classCallCheck(this, Name);

		return _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).call(this, props));
	}

	_createClass(Name, [{
		key: 'sendName',
		value: function sendName(player) {
			socket.emit('name', player);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			socket.on('readyView', function () {
				window.location.href = '#/ready';
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'user-register' },
				_react2.default.createElement('input', { type: 'text', id: 'player', placeholder: 'stumpy the kitty' }),
				_react2.default.createElement('button', { value: 'Submit', onClick: function () {
						this.sendName(document.getElementById('player').value);
					}.bind(this) })
			);
		}
	}]);

	return Name;
}(_react2.default.Component);

exports.default = Name;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hbWUuanN4Il0sIm5hbWVzIjpbIk5hbWUiLCJwcm9wcyIsInBsYXllciIsInNvY2tldCIsImVtaXQiLCJvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlbmROYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiYmluZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxJOzs7QUFDcEIsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFHQUNaQSxLQURZO0FBRWxCOzs7OzJCQUVRQyxNLEVBQVE7QUFDaEJDLFVBQU9DLElBQVAsQ0FBWSxNQUFaLEVBQW9CRixNQUFwQjtBQUNBOzs7dUNBRW9CO0FBQ3BCQyxVQUFPRSxFQUFQLENBQVUsV0FBVixFQUF1QixZQUFZO0FBQ2xDQyxXQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixTQUF2QjtBQUNBLElBRkQ7QUFHQTs7OzJCQUlRO0FBQ1IsVUFDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLGVBQWY7QUFFQyw2Q0FBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxRQUF0QixFQUErQixhQUFZLGtCQUEzQyxHQUZEO0FBR0MsOENBQVEsT0FBTSxRQUFkLEVBQXVCLFNBQVMsWUFBWTtBQUFDLFdBQUtDLFFBQUwsQ0FBY0MsU0FBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBaEQ7QUFBdUQsTUFBcEUsQ0FBcUVDLElBQXJFLENBQTBFLElBQTFFLENBQWhDO0FBSEQsSUFERjtBQVdBOzs7O0VBN0JnQyxnQkFBTUMsUzs7a0JBQW5CZCxJIiwiZmlsZSI6Im5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuXHRzZW5kTmFtZShwbGF5ZXIpIHtcblx0XHRzb2NrZXQuZW1pdCgnbmFtZScsIHBsYXllcilcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRzb2NrZXQub24oJ3JlYWR5VmlldycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcmVhZHknXG5cdFx0fSk7XG5cdH0gXG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXItcmVnaXN0ZXJcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3BsYXllcicgcGxhY2Vob2xkZXI9J3N0dW1weSB0aGUga2l0dHknIC8+XG5cdFx0XHRcdFx0PGJ1dHRvbiB2YWx1ZT0nU3VibWl0JyBvbkNsaWNrPXtmdW5jdGlvbiAoKSB7dGhpcy5zZW5kTmFtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJykudmFsdWUpfS5iaW5kKHRoaXMpfSAvPlxuXG5cdFx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59XG5cbiJdfQ==