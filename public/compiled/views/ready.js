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
				console.log('Ready: ' + window.Animal);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3JlYWR5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ3BCLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWixLQURZO0FBRWxCOzs7O3VDQUVvQjtBQUNwQixVQUFPLEVBQVAsQ0FBVSxXQUFWLEVBQXNCLFVBQVUsVUFBVixFQUFzQjtBQUMzQyxXQUFPLE1BQVAsR0FBZ0IsVUFBaEI7QUFDQSxZQUFRLEdBQVIsQ0FBWSxZQUFZLE9BQU8sTUFBL0I7QUFDQSxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsV0FBdkI7QUFDQztBQUNELElBTEQ7QUFNQTs7OzBCQUVPO0FBQ1AsVUFBTyxJQUFQLENBQVksT0FBWjtBQUNBOzs7MkJBRVE7QUFDUixVQUNBO0FBQUE7QUFBQSxNQUFLLFdBQVUsYUFBZjtBQUNDO0FBQUE7QUFBQSxPQUFJLFdBQVUsS0FBZDtBQUFBO0FBQUEsS0FERDtBQUVDO0FBQUE7QUFBQSxPQUFRLFdBQVUsOEJBQWxCLEVBQWlELE9BQU0sdUNBQXZELEVBQStGLFNBQVMsS0FBSyxLQUE3RztBQUFBO0FBQUE7QUFGRCxJQURBO0FBTUM7Ozs7RUF6QmdDLGdCQUFNLFM7O2tCQUFwQixLIiwiZmlsZSI6InJlYWR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0c29ja2V0Lm9uKCdjb3VudGRvd24nLGZ1bmN0aW9uIChhbmltYWxOYW1lKSB7XG5cdFx0XHR3aW5kb3cuQW5pbWFsID0gYW5pbWFsTmFtZTtcblx0XHRcdGNvbnNvbGUubG9nKCdSZWFkeTogJyArIHdpbmRvdy5BbmltYWwpO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9kcmF3aW5nJ1xuXHRcdCAgLy9yZWRpcmVjdCB0byBjb3VudGRvd24gdmlld1xuXHRcdH0pO1xuXHR9IFxuXG5cdHN0YXJ0KCkge1xuXHRcdHNvY2tldC5lbWl0KCdyZWFkeScpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWFkeVNjcmVlblwiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cInRsdFwiPiBFdmVyeW9uZSBSZWFkeT8gPC9oMT5cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodFwiIHZhbHVlPVwiUHJlc3MgdGhpcyBidXR0b24gd2hlbiBldmVyeW9uZSBpcyBpblwiIG9uQ2xpY2s9e3RoaXMuc3RhcnR9PlByZXNzIHRoaXMgYnV0dG9uIHdoZW4gZXZlcnlvbmUgaXMgcmVhZHk8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XG5cdCl9XG5cdH0iXX0=