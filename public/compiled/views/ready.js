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
				null,
				_react2.default.createElement(
					'h1',
					null,
					' Everyone Ready? '
				),
				_react2.default.createElement(
					'button',
					{ value: 'Press this button when everyone is in', onClick: this.start },
					'Press this button when everyone is ready'
				)
			);
		}
	}]);

	return ready;
}(_react2.default.Component);

exports.default = ready;
<<<<<<< 8135fb6d644b754bf594aa482387d30468b9bd9f
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3JlYWR5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ3BCLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWixLQURZO0FBRWxCOzs7O3VDQUVvQjtBQUNwQixVQUFPLEVBQVAsQ0FBVSxXQUFWLEVBQXNCLFVBQVUsVUFBVixFQUFzQjtBQUMzQyxXQUFPLE1BQVAsR0FBZ0IsVUFBaEI7QUFDQSxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsV0FBdkI7QUFDQztBQUNELElBSkQ7QUFLQTs7OzBCQUVPO0FBQ1AsVUFBTyxJQUFQLENBQVksT0FBWjtBQUNBOzs7MkJBRVE7QUFDUixVQUNBO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDO0FBQUE7QUFBQSxPQUFRLE9BQU0sdUNBQWQsRUFBc0QsU0FBUyxLQUFLLEtBQXBFO0FBQUE7QUFBQTtBQUZELElBREE7QUFRQzs7OztFQTFCZ0MsZ0JBQU0sUzs7a0JBQXBCLEsiLCJmaWxlIjoicmVhZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlYWR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRzb2NrZXQub24oJ2NvdW50ZG93bicsZnVuY3Rpb24gKGFuaW1hbE5hbWUpIHtcblx0XHRcdHdpbmRvdy5BbmltYWwgPSBhbmltYWxOYW1lO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9kcmF3aW5nJ1xuXHRcdCAgLy9yZWRpcmVjdCB0byBjb3VudGRvd24gdmlld1xuXHRcdH0pO1xuXHR9IFxuXG5cdHN0YXJ0KCkge1xuXHRcdHNvY2tldC5lbWl0KCdyZWFkeScpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT4gRXZlcnlvbmUgUmVhZHk/IDwvaDE+XG5cdFx0XHQ8YnV0dG9uIHZhbHVlPVwiUHJlc3MgdGhpcyBidXR0b24gd2hlbiBldmVyeW9uZSBpcyBpblwiIG9uQ2xpY2s9e3RoaXMuc3RhcnR9PlByZXNzIHRoaXMgYnV0dG9uIHdoZW4gZXZlcnlvbmUgaXMgcmVhZHk8L2J1dHRvbj5cblxuXHRcdDwvZGl2PlxuXG5cdFx0XG5cdCl9XG5cdH0iXX0=
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3JlYWR5LmpzeCJdLCJuYW1lcyI6WyJyZWFkeSIsInByb3BzIiwic29ja2V0Iiwib24iLCJhbmltYWxOYW1lIiwid2luZG93IiwiQW5pbWFsIiwibG9jYXRpb24iLCJocmVmIiwiZW1pdCIsInN0YXJ0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7OztBQUNwQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVHQUNaQSxLQURZO0FBRWxCOzs7O3VDQUVvQjtBQUNwQkMsVUFBT0MsRUFBUCxDQUFVLFdBQVYsRUFBc0IsVUFBVUMsVUFBVixFQUFzQjtBQUMzQ0MsV0FBT0MsTUFBUCxHQUFnQkYsVUFBaEI7QUFDQUMsV0FBT0UsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsV0FBdkI7QUFDQztBQUNELElBSkQ7QUFLQTs7OzBCQUVPO0FBQ1BOLFVBQU9PLElBQVAsQ0FBWSxPQUFaO0FBQ0E7OzsyQkFFUTtBQUNSLFVBQ0E7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUREO0FBRUMsOENBQVEsT0FBTSx1Q0FBZCxFQUFzRCxTQUFTLEtBQUtDLEtBQXBFO0FBRkQsSUFEQTtBQU1DOzs7O0VBeEJnQyxnQkFBTUMsUzs7a0JBQXBCWCxLIiwiZmlsZSI6InJlYWR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWFkeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0c29ja2V0Lm9uKCdjb3VudGRvd24nLGZ1bmN0aW9uIChhbmltYWxOYW1lKSB7XG5cdFx0XHR3aW5kb3cuQW5pbWFsID0gYW5pbWFsTmFtZTtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvZHJhd2luZydcblx0XHQgIC8vcmVkaXJlY3QgdG8gY291bnRkb3duIHZpZXdcblx0XHR9KTtcblx0fSBcblxuXHRzdGFydCgpIHtcblx0XHRzb2NrZXQuZW1pdCgncmVhZHknKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+IEV2ZXJ5b25lIFJlYWR5PyA8L2gxPlxuXHRcdFx0PGJ1dHRvbiB2YWx1ZT1cIlByZXNzIHRoaXMgYnV0dG9uIHdoZW4gZXZlcnlvbmUgaXMgaW5cIiBvbkNsaWNrPXt0aGlzLnN0YXJ0fT48L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XG5cdCl9XG5cdH0iXX0=
>>>>>>> Front end changes
