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

var Result = function (_React$Component) {
	_inherits(Result, _React$Component);

	function Result(props) {
		_classCallCheck(this, Result);

		return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));
	}

	_createClass(Result, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			// listen to switch to readyView
			socket.on('readyView', function () {
				window.location.href = '#/ready';
			});
		}
	}, {
		key: 'sendPlayAgain',
		value: function sendPlayAgain() {
			// emit event to server
			socket.emit('again');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					'We\'re all winners.'
				),
				_react2.default.createElement('button', { value: 'Just kidding, play again', onClick: this.sendPlayAgain })
			);
		}
	}]);

	return Result;
}(_react2.default.Component);

exports.default = Result;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3Jlc3VsdC5qc3giXSwibmFtZXMiOlsiUmVzdWx0IiwicHJvcHMiLCJzb2NrZXQiLCJvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVtaXQiLCJzZW5kUGxheUFnYWluIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07OztBQUNwQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNaQSxLQURZO0FBRWxCOzs7O3VDQUVxQjs7QUFFcEI7QUFDQUMsVUFBT0MsRUFBUCxDQUFVLFdBQVYsRUFBdUIsWUFBWTtBQUNqQ0MsV0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsU0FBdkI7QUFDRCxJQUZEO0FBSUE7OztrQ0FFZTtBQUNmO0FBQ0FKLFVBQU9LLElBQVAsQ0FBWSxPQUFaO0FBQ0E7OzsyQkFFTztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUUsOENBQVEsT0FBTSwwQkFBZCxFQUF5QyxTQUFTLEtBQUtDLGFBQXZEO0FBRkYsSUFERDtBQU1BOzs7O0VBMUJrQyxnQkFBTUMsUzs7a0JBQXJCVCxNIiwiZmlsZSI6InJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICBcdC8vIGxpc3RlbiB0byBzd2l0Y2ggdG8gcmVhZHlWaWV3XG4gIFx0c29ja2V0Lm9uKCdyZWFkeVZpZXcnLCBmdW5jdGlvbiAoKSB7IFxuICBcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZWFkeScgXG4gIFx0fSk7XG5cbiAgfVxuXG4gIHNlbmRQbGF5QWdhaW4oKSB7XG4gIFx0Ly8gZW1pdCBldmVudCB0byBzZXJ2ZXJcblx0ICBzb2NrZXQuZW1pdCgnYWdhaW4nKTtcbiAgfVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdCAgPGRpdj5XZSdyZSBhbGwgd2lubmVycy48L2Rpdj5cblx0XHRcdCAgPGJ1dHRvbiB2YWx1ZT1cIkp1c3Qga2lkZGluZywgcGxheSBhZ2FpblwiIG9uQ2xpY2s9e3RoaXMuc2VuZFBsYXlBZ2Fpbn0+PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufSJdfQ==