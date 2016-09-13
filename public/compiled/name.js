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

//the starting view shown when you load the game

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
				{ className: 'user-register z-depth-1 valign' },
				_react2.default.createElement('input', { type: 'text', id: 'player', placeholder: 'stumpy the kitty' }),
				_react2.default.createElement(
					'button',
					{ className: 'btn waves-effect waves-light', value: 'Submit', onClick: function () {
							this.sendName(document.getElementById('player').value);
						}.bind(this) },
					'submit'
				)
			);
		}
	}]);

	return Name;
}(_react2.default.Component);

exports.default = Name;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hbWUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQixJOzs7QUFDcEIsZUFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1osS0FEWTtBQUVsQjs7OzsyQkFFUSxNLEVBQVE7QUFDaEIsVUFBTyxJQUFQLENBQVksTUFBWixFQUFvQixNQUFwQjtBQUNBOzs7dUNBRW9CO0FBQ3BCLFVBQU8sRUFBUCxDQUFVLFdBQVYsRUFBdUIsWUFBWTtBQUNsQyxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsU0FBdkI7QUFDQSxJQUZEO0FBR0E7OzsyQkFJUTtBQUNSLFVBRUU7QUFBQTtBQUFBLE1BQUssV0FBVSxnQ0FBZjtBQUVDLDZDQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLFFBQXRCLEVBQStCLGFBQVksa0JBQTNDLEdBRkQ7QUFHQztBQUFBO0FBQUEsT0FBUSxXQUFVLDhCQUFsQixFQUFpRCxPQUFNLFFBQXZELEVBQWdFLFNBQVMsWUFBWTtBQUFDLFlBQUssUUFBTCxDQUFjLFNBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxLQUFoRDtBQUF1RCxPQUFwRSxDQUFxRSxJQUFyRSxDQUEwRSxJQUExRSxDQUF6RTtBQUFBO0FBQUE7QUFIRCxJQUZGO0FBY0E7Ozs7RUFoQ2dDLGdCQUFNLFM7O2tCQUFuQixJIiwiZmlsZSI6Im5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vdGhlIHN0YXJ0aW5nIHZpZXcgc2hvd24gd2hlbiB5b3UgbG9hZCB0aGUgZ2FtZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdHNlbmROYW1lKHBsYXllcikge1xuXHRcdHNvY2tldC5lbWl0KCduYW1lJywgcGxheWVyKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHNvY2tldC5vbigncmVhZHlWaWV3JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZWFkeSdcblx0XHR9KTtcblx0fSBcblxuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQgICAgXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlci1yZWdpc3RlciB6LWRlcHRoLTEgdmFsaWduXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIGlkPSdwbGF5ZXInIHBsYWNlaG9sZGVyPSdzdHVtcHkgdGhlIGtpdHR5JyAvPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiIHZhbHVlPSdTdWJtaXQnIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHt0aGlzLnNlbmROYW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKS52YWx1ZSl9LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59XG5cbiJdfQ==