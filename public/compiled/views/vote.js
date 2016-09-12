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

//show prompt for thing
var Select = function Select(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'voteInstance', id: props.id, value: props.name, onClick: function onClick() {
				return props.voting(props.id);
			} },
		_react2.default.createElement('img', { src: props.image })
	);
};

//voted is the id tag for the current voted drawing

var Vote = function (_React$Component) {
	_inherits(Vote, _React$Component);

	function Vote(props) {
		_classCallCheck(this, Vote);

		var _this = _possibleConstructorReturn(this, (Vote.__proto__ || Object.getPrototypeOf(Vote)).call(this, props));

		_this.state = {
			renderInfo: []

		};
		return _this;
	}

	_createClass(Vote, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var info = [];
			socket.on('vote', function (data) {
				//time for countdown
				var time = data.time;
				var canvas = new fabric.Canvas('test');
				//var images = [];
				data.images.forEach(function (blob) {
					//images.push(blob.vectorDrawing);
					canvas.loadFromJSON(blob.vectorDrawing, function () {

						var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
							height: 375
						});
						info.push({
							id: 'd' + info.length,
							name: blob.playerName,
							image: image
						});
						canvas.clear();
					});
				});

				this.setState({
					renderInfo: info
				});

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				//this.renderDrawings(images);

			}.bind(this));

			socket.on('countVotes', function () {
				//Emit name voted on to server.
				socket.emit('vote', this.getVotedName());
				socket.removeListener('countVotes');
				window.location.href = '#/result';
			}.bind(this));
		}
	}, {
		key: 'getVotedName',
		value: function getVotedName() {

			if (document.getElementsByClassName('voted')[0]) {
				return document.getElementsByClassName('voted')[0].getAttribute('value');
			} else {
				return null;
			}
		}
	}, {
		key: 'voting',
		value: function voting(id) {
			if (document.getElementsByClassName('voted')[0]) {
				document.getElementsByClassName('voted')[0].classList.remove("voted");
			}
			document.getElementById(id).className += "voted";
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement(
				'div',
				{ id: 'vote' },
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2), image: data.image });
				})
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3ZvdGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFDLEtBQUQ7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLFdBQVUsY0FBZixFQUE4QixJQUFJLE1BQU0sRUFBeEMsRUFBNEMsT0FBTyxNQUFNLElBQXpELEVBQStELFNBQVM7QUFBQSxXQUFNLE1BQU0sTUFBTixDQUFhLE1BQU0sRUFBbkIsQ0FBTjtBQUFBLElBQXhFO0FBQ0MseUNBQUssS0FBSyxNQUFNLEtBQWhCO0FBREQsRUFEWTtBQUFBLENBQWI7O0FBTUE7O0lBRXFCLEk7OztBQUNwQixlQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLGVBQVk7O0FBREEsR0FBYjtBQUZrQjtBQU1sQjs7Ozt1Q0FFb0I7QUFDcEIsT0FBSSxPQUFPLEVBQVg7QUFDQSxVQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLFVBQVUsSUFBVixFQUFnQjtBQUNqQztBQUNBLFFBQUksT0FBTyxLQUFLLElBQWhCO0FBQ0EsUUFBSSxTQUFTLElBQUksT0FBTyxNQUFYLENBQWtCLE1BQWxCLENBQWI7QUFDQTtBQUNBLFNBQUssTUFBTCxDQUFZLE9BQVosQ0FBcUIsVUFBUyxJQUFULEVBQWU7QUFDbkM7QUFDRSxZQUFPLFlBQVAsQ0FBcUIsS0FBSyxhQUExQixFQUF5QyxZQUFXOztBQUduRCxVQUFJLFFBQVEsT0FBTyxTQUFQLENBQWlCO0FBQzdCLGVBQVEsV0FEcUI7QUFFN0IsbUJBQVksSUFGaUI7QUFHN0IsY0FBTyxHQUhzQjtBQUk1QixlQUFRO0FBSm9CLE9BQWpCLENBQVo7QUFNRixXQUFLLElBQUwsQ0FBVTtBQUNULFdBQUksTUFBTSxLQUFLLE1BRE47QUFFVCxhQUFLLEtBQUssVUFGRDtBQUdULGNBQU87QUFIRSxPQUFWO0FBS0UsYUFBTyxLQUFQO0FBQ0EsTUFmRDtBQWdCRixLQWxCRDs7QUFvQkEsU0FBSyxRQUFMLENBQWM7QUFDYixpQkFBWTtBQURDLEtBQWQ7O0FBSUM7QUFDQTtBQUNBOztBQUlELElBbkNpQixDQW1DaEIsSUFuQ2dCLENBbUNYLElBbkNXLENBQWxCOztBQXFDQSxVQUFPLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFlBQVk7QUFDbkM7QUFDQSxXQUFPLElBQVAsQ0FBWSxNQUFaLEVBQW9CLEtBQUssWUFBTCxFQUFwQjtBQUNBLFdBQU8sY0FBUCxDQUFzQixZQUF0QjtBQUNBLFdBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixVQUF2QjtBQUNBLElBTHVCLENBS3RCLElBTHNCLENBS2pCLElBTGlCLENBQXhCO0FBUUE7OztpQ0FJYzs7QUFFZCxPQUFJLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBSixFQUFpRDtBQUMvQyxXQUFPLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsRUFBNEMsWUFBNUMsQ0FBeUQsT0FBekQsQ0FBUDtBQUNELElBRkQsTUFFTztBQUNKLFdBQU8sSUFBUDtBQUNGO0FBQ0Q7Ozt5QkFHTSxFLEVBQUk7QUFDVixPQUFHLFNBQVMsc0JBQVQsQ0FBZ0MsT0FBaEMsRUFBeUMsQ0FBekMsQ0FBSCxFQUFnRDtBQUMvQyxhQUFTLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLEVBQTRDLFNBQTVDLENBQXNELE1BQXRELENBQTZELE9BQTdEO0FBQ0E7QUFDRCxZQUFTLGNBQVQsQ0FBd0IsRUFBeEIsRUFBNEIsU0FBNUIsSUFBeUMsT0FBekM7QUFDQTs7OzJCQUdRO0FBQUE7O0FBQ1I7QUFDQSxVQUNDO0FBQUE7QUFBQSxNQUFLLElBQUcsTUFBUjtBQUNFLFNBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsR0FBdEIsQ0FBMEIsVUFBQyxJQUFEO0FBQUEsWUFDMUIsOEJBQUMsTUFBRCxJQUFRLElBQUksS0FBSyxFQUFqQixFQUFxQixNQUFRLEtBQUssSUFBbEMsRUFBd0MsUUFBUSxPQUFLLE1BQUwsQ0FBWSxJQUFaLFFBQWhELEVBQXdFLE9BQU8sS0FBSyxLQUFwRixHQUQwQjtBQUFBLEtBQTFCO0FBREYsSUFERDtBQVdBOzs7O0VBM0ZnQyxnQkFBTSxTOztrQkFBbkIsSSIsImZpbGUiOiJ2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL3Nob3cgcHJvbXB0IGZvciB0aGluZ1xudmFyIFNlbGVjdCA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInZvdGVJbnN0YW5jZVwiIGlkPXtwcm9wcy5pZH0gdmFsdWU9e3Byb3BzLm5hbWV9IG9uQ2xpY2s9eygpID0+IHByb3BzLnZvdGluZyhwcm9wcy5pZCl9PlxuXHRcdDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0vPlxuXHQ8L2Rpdj5cblx0KVxuXG4vL3ZvdGVkIGlzIHRoZSBpZCB0YWcgZm9yIHRoZSBjdXJyZW50IHZvdGVkIGRyYXdpbmdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86IFtdXG5cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dmFyIGluZm8gPSBbXTtcblx0XHRzb2NrZXQub24oJ3ZvdGUnLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Ly90aW1lIGZvciBjb3VudGRvd25cblx0XHRcdHZhciB0aW1lID0gZGF0YS50aW1lO1xuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCd0ZXN0Jylcblx0XHRcdC8vdmFyIGltYWdlcyA9IFtdO1xuXHRcdFx0ZGF0YS5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0XHQvL2ltYWdlcy5wdXNoKGJsb2IudmVjdG9yRHJhd2luZyk7XG5cdFx0XHQgIFx0Y2FudmFzLmxvYWRGcm9tSlNPTiggYmxvYi52ZWN0b3JEcmF3aW5nLCBmdW5jdGlvbigpIHtcblxuXG5cdFx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGllcjogMC4yNSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM3NSxcblx0XHRcdFx0XHRcdCAgaGVpZ2h0OiAzNzVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGluZm8ucHVzaCh7XG5cdFx0XHRcdFx0XHRpZDogJ2QnICsgaW5mby5sZW5ndGgsXG5cdFx0XHRcdFx0XHRuYW1lOmJsb2IucGxheWVyTmFtZSwgXG5cdFx0XHRcdFx0XHRpbWFnZTogaW1hZ2Vcblx0XHRcdFx0XHR9KVxuXHRcdFx0ICBcdFx0Y2FudmFzLmNsZWFyKCk7XG5cdFx0XHQgIFx0fSlcblx0XHRcdH0pXG4gXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cmVuZGVySW5mbzogaW5mb1xuXHRcdFx0fSlcblxuXHRcdCAgLy8gcmVkaXJlY3QgdG8gdm90aW5nIHZpZXdcblx0XHQgIC8vIGltYWdlcyBpcyBhbiBhcnJheSBvZiBKU09OLnN0cmluZ2lmeShjYW52YXMpIG9iamVjdHMgdG8gdm90ZSBvblxuXHRcdCAgLy90aGlzLnJlbmRlckRyYXdpbmdzKGltYWdlcyk7XG5cblxuXG5cdFx0fS5iaW5kKHRoaXMpKTtcblxuXHRcdHNvY2tldC5vbignY291bnRWb3RlcycsIGZ1bmN0aW9uKCkgIHtcblx0XHRcdC8vRW1pdCBuYW1lIHZvdGVkIG9uIHRvIHNlcnZlci5cblx0XHRcdHNvY2tldC5lbWl0KCd2b3RlJywgdGhpcy5nZXRWb3RlZE5hbWUoKSlcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcignY291bnRWb3RlcycpXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3Jlc3VsdCcgXG5cdFx0fS5iaW5kKHRoaXMpKVxuXG5cblx0fSBcblxuXG5cblx0Z2V0Vm90ZWROYW1lKCkge1xuXG5cdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0pIHtcblx0ICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXHRcdH0gZWxzZSB7XG4gICAgIHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cblx0dm90aW5nKGlkKSB7XG5cdFx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwidm90ZWRcIilcblx0XHR9XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTmFtZSArPSBcInZvdGVkXCJcblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdC8vTmVlZCB0byBkZWNpZGUgaWYgd2UgdXNlIG9uZSBiaWcgY2FudmFzLCBvciBqdXN0IHJlbmRlciBpbWFnZXMgb2YgYWxsIHRoZSBkcmF3aW5nc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwidm90ZVwiPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5yZW5kZXJJbmZvLm1hcCgoZGF0YSkgPT4gXG5cdFx0XHRcdFx0PFNlbGVjdCBpZD17ZGF0YS5pZH0gbmFtZSA9IHtkYXRhLm5hbWV9IHZvdGluZz17dGhpcy52b3RpbmcuYmluZCh0aGlzKX0gaW1hZ2U9e2RhdGEuaW1hZ2V9Lz5cblx0XHRcdFx0KX1cblxuXHRcdFx0PC9kaXY+XG5cblxuXG5cdFx0XHQpXG5cdH1cbn0iXX0=