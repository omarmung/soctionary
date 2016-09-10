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

var ready = function (_React$Component) {
	_inherits(ready, _React$Component);

	function ready(props) {
		_classCallCheck(this, ready);

		return _possibleConstructorReturn(this, (ready.__proto__ || Object.getPrototypeOf(ready)).call(this, props));
	}

	_createClass(ready, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			socket.on('countdown', function (animalName) {
				window.Animal = animalName;
				window.location.href = '#/drawing';
				//redirect to countdown view
			});
		}
	}, {
		key: 'start',
		value: function start() {
			socket.emit('ready');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'readyScreen' },
				_react2.default.createElement(
					'h1',
					{ className: 'tlt' },
					' Everyone Ready? '
				),
				_react2.default.createElement(
					'button',
					{ className: 'btn waves-effect waves-light', value: 'Press this button when everyone is in', onClick: this.start },
					'Press this button when everyone is ready'
				)
			);
		}
	}]);

	return ready;
}(_react2.default.Component);

exports.default = ready;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3JlYWR5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ3BCLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWixLQURZO0FBRWxCOzs7O3VDQUVvQjtBQUNwQixVQUFPLEVBQVAsQ0FBVSxXQUFWLEVBQXNCLFVBQVUsVUFBVixFQUFzQjtBQUMzQyxXQUFPLE1BQVAsR0FBZ0IsVUFBaEI7QUFDQSxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsV0FBdkI7QUFDQztBQUNELElBSkQ7QUFLQTs7OzBCQUVPO0FBQ1AsVUFBTyxJQUFQLENBQVksT0FBWjtBQUNBOzs7MkJBRVE7QUFDUixVQUNBO0FBQUE7QUFBQSxNQUFLLFdBQVUsYUFBZjtBQUNDO0FBQUE7QUFBQSxPQUFJLFdBQVUsS0FBZDtBQUFBO0FBQUEsS0FERDtBQUVDO0FBQUE7QUFBQSxPQUFRLFdBQVUsOEJBQWxCLEVBQWlELE9BQU0sdUNBQXZELEVBQStGLFNBQVMsS0FBSyxLQUE3RztBQUFBO0FBQUE7QUFGRCxJQURBO0FBTUM7Ozs7RUF4QmdDLGdCQUFNLFM7O2tCQUFwQixLIiwiZmlsZSI6InJlYWR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0c29ja2V0Lm9uKCdjb3VudGRvd24nLGZ1bmN0aW9uIChhbmltYWxOYW1lKSB7IFxuXHRcdFx0d2luZG93LkFuaW1hbCA9IGFuaW1hbE5hbWU7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL2RyYXdpbmcnXG5cdFx0ICAvL3JlZGlyZWN0IHRvIGNvdW50ZG93biB2aWV3XG5cdFx0fSk7XG5cdH0gXG5cblx0c3RhcnQoKSB7XG5cdFx0c29ja2V0LmVtaXQoJ3JlYWR5Jyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlYWR5U2NyZWVuXCI+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGx0XCI+IEV2ZXJ5b25lIFJlYWR5PyA8L2gxPlxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0XCIgdmFsdWU9XCJQcmVzcyB0aGlzIGJ1dHRvbiB3aGVuIGV2ZXJ5b25lIGlzIGluXCIgb25DbGljaz17dGhpcy5zdGFydH0+UHJlc3MgdGhpcyBidXR0b24gd2hlbiBldmVyeW9uZSBpcyByZWFkeTwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHRcblx0KX1cblx0fSJdfQ==