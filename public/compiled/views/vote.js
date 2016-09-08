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
		key: 'renderDrawings',
		value: function renderDrawings(arr) {
			canvas.loadFromJSON(arr[0], canvas.renderAll.bind(canvas));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', null);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3ZvdGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFDcEIsZUFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1osS0FEWTtBQUVsQjs7OztpQ0FFZ0IsRyxFQUFLO0FBQ25CLFVBQU8sWUFBUCxDQUFxQixJQUFJLENBQUosQ0FBckIsRUFBNkIsT0FBTyxTQUFQLENBQWlCLElBQWpCLENBQXNCLE1BQXRCLENBQTdCO0FBQ0Q7OzsyQkFFTztBQUNSLFVBRUMsMENBRkQ7QUFPQTs7OztFQWpCZ0MsZ0JBQU0sUzs7a0JBQW5CLEkiLCJmaWxlIjoidm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuICAgcmVuZGVyRHJhd2luZ3MoYXJyKSB7XG5cdFx0ICBjYW52YXMubG9hZEZyb21KU09OKCBhcnJbMF0sIGNhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpICk7XG5cdFx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdj5cblx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdClcblx0fVxufVxuXG4iXX0=