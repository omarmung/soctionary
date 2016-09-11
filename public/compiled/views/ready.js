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
				{ className: 'readyScreen valign' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3JlYWR5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ3BCLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWixLQURZO0FBRWxCOzs7O3VDQUVvQjtBQUNwQixVQUFPLEVBQVAsQ0FBVSxXQUFWLEVBQXNCLFVBQVUsVUFBVixFQUFzQjtBQUMzQyxXQUFPLE1BQVAsR0FBZ0IsVUFBaEI7QUFDQSxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsV0FBdkI7QUFDQztBQUNELElBSkQ7QUFLQTs7OzBCQUVPO0FBQ1AsVUFBTyxJQUFQLENBQVksT0FBWjtBQUNBOzs7MkJBRVE7QUFDUixVQUNBO0FBQUE7QUFBQSxNQUFLLFdBQVUsb0JBQWY7QUFDQztBQUFBO0FBQUEsT0FBSSxXQUFVLEtBQWQ7QUFBQTtBQUFBLEtBREQ7QUFFQztBQUFBO0FBQUEsT0FBUSxXQUFVLDhCQUFsQixFQUFpRCxPQUFNLHVDQUF2RCxFQUErRixTQUFTLEtBQUssS0FBN0c7QUFBQTtBQUFBO0FBRkQsSUFEQTtBQU1DOzs7O0VBeEJnQyxnQkFBTSxTOztrQkFBcEIsSyIsImZpbGUiOiJyZWFkeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVhZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHNvY2tldC5vbignY291bnRkb3duJyxmdW5jdGlvbiAoYW5pbWFsTmFtZSkgeyBcblx0XHRcdHdpbmRvdy5BbmltYWwgPSBhbmltYWxOYW1lO1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9kcmF3aW5nJ1xuXHRcdCAgLy9yZWRpcmVjdCB0byBjb3VudGRvd24gdmlld1xuXHRcdH0pO1xuXHR9IFxuXG5cdHN0YXJ0KCkge1xuXHRcdHNvY2tldC5lbWl0KCdyZWFkeScpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWFkeVNjcmVlbiB2YWxpZ25cIj5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0bHRcIj4gRXZlcnlvbmUgUmVhZHk/IDwvaDE+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHRcIiB2YWx1ZT1cIlByZXNzIHRoaXMgYnV0dG9uIHdoZW4gZXZlcnlvbmUgaXMgaW5cIiBvbkNsaWNrPXt0aGlzLnN0YXJ0fT5QcmVzcyB0aGlzIGJ1dHRvbiB3aGVuIGV2ZXJ5b25lIGlzIHJlYWR5PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdFxuXHQpfVxuXHR9Il19