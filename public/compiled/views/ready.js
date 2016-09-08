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
				_react2.default.createElement('button', { value: 'Press this button when everyone is in', onClick: this.start })
			);
		}
	}]);

	return ready;
}(_react2.default.Component);

exports.default = ready;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3JlYWR5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ3BCLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWixLQURZO0FBRWxCOzs7O3VDQUVvQjtBQUNwQixVQUFPLEVBQVAsQ0FBVSxXQUFWLEVBQXNCLFVBQVUsVUFBVixFQUFzQjtBQUMzQyxXQUFPLE1BQVAsR0FBZ0IsVUFBaEI7QUFDQSxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsV0FBdkI7QUFDQztBQUNELElBSkQ7QUFLQTs7OzBCQUVPO0FBQ1AsVUFBTyxJQUFQLENBQVksT0FBWjtBQUNBOzs7MkJBRVE7QUFDUixVQUNBO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDLDhDQUFRLE9BQU0sdUNBQWQsRUFBc0QsU0FBUyxLQUFLLEtBQXBFO0FBRkQsSUFEQTtBQVFDOzs7O0VBMUJnQyxnQkFBTSxTOztrQkFBcEIsSyIsImZpbGUiOiJyZWFkeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVhZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHNvY2tldC5vbignY291bnRkb3duJyxmdW5jdGlvbiAoYW5pbWFsTmFtZSkge1xuXHRcdFx0d2luZG93LkFuaW1hbCA9IGFuaW1hbE5hbWU7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL2RyYXdpbmcnXG5cdFx0ICAvL3JlZGlyZWN0IHRvIGNvdW50ZG93biB2aWV3XG5cdFx0fSk7XG5cdH0gXG5cblx0c3RhcnQoKSB7XG5cdFx0c29ja2V0LmVtaXQoJ3JlYWR5Jyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPiBFdmVyeW9uZSBSZWFkeT8gPC9oMT5cblx0XHRcdDxidXR0b24gdmFsdWU9XCJQcmVzcyB0aGlzIGJ1dHRvbiB3aGVuIGV2ZXJ5b25lIGlzIGluXCIgb25DbGljaz17dGhpcy5zdGFydH0+PC9idXR0b24+XG5cblx0XHQ8L2Rpdj5cblxuXHRcdFxuXHQpfVxuXHR9Il19