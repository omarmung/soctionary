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

var Player = function Player(props) {
	return _react2.default.createElement(
		'div',
		{ id: props.id },
		props.name ? 'User ' + props.name + ' had ' + props.votes + ' votes. ' : null,
		props.goAgain ? _react2.default.createElement(
			'button',
			{ onClick: props.goAgain },
			'Play again?'
		) : _react2.default.createElement('img', { src: props.image })
	);
};

var Result = function (_React$Component) {
	_inherits(Result, _React$Component);

	function Result(props) {
		_classCallCheck(this, Result);

		var _this = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));

		_this.state = {
			renderInfo: []
		};
		return _this;
	}

	_createClass(Result, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			var info = [];
			socket.on('results', function (data) {
				//time for countdown
				var time = data.time;

				var images = [];
				data.images.forEach(function (blob) {
					var canvas = new fabric.Canvas('test');
					// images.push(blob.vectorDrawing);
					canvas.loadFromJSON(blob.vectorDrawing, function () {
						// canvas.renderAll.bind(canvas)
						// var blob = JSON.parse(json);
						console.log(blob);
						var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
							height: 375
						});
						canvas.clear();
						info.push({
							id: 'd' + info.length,
							name: blob.playerName,
							votes: blob.voteCount || 0,
							image: image
							//wins:blob.roundWins 
						});
					});
				});
				info.push({
					id: 'again',
					goAgain: this.goAgain
				});
				this.setState({
					renderInfo: info
				});
				//this.renderDrawings(images)
				socket.removeListener('results');
			}.bind(this));

			// listen to switch to readyView
			socket.on('readyView', function () {
				window.location.href = '#/ready';
			});
		}
	}, {
		key: 'goAgain',
		value: function goAgain() {
			socket.emit('again');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'vote' },
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Player, { id: data.id, name: data.name, votes: data.votes, image: data.image, goAgain: data.goAgain });
				})
			);
		}
	}]);

	return Result;
}(_react2.default.Component);

exports.default = Result;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3Jlc3VsdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFDLEtBQUQ7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLElBQUksTUFBTSxFQUFmO0FBQ0MsUUFBTSxJQUFOLGFBQXFCLE1BQU0sSUFBM0IsYUFBdUMsTUFBTSxLQUE3QyxnQkFBK0QsSUFEaEU7QUFFQyxRQUFNLE9BQU4sR0FBaUI7QUFBQTtBQUFBLEtBQVEsU0FBUyxNQUFNLE9BQXZCO0FBQUE7QUFBQSxHQUFqQixHQUF3RSx1Q0FBSyxLQUFLLE1BQU0sS0FBaEI7QUFGekUsRUFEWTtBQUFBLENBQWI7O0lBU3FCLE07OztBQUNwQixpQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1osS0FEWTs7QUFFbEIsUUFBSyxLQUFMLEdBQWE7QUFDWixlQUFXO0FBREMsR0FBYjtBQUZrQjtBQUtsQjs7Ozt1Q0FFb0I7O0FBR3BCLE9BQUksT0FBTyxFQUFYO0FBQ0EsVUFBTyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFVLElBQVYsRUFBZ0I7QUFDcEM7QUFDQSxRQUFJLE9BQU8sS0FBSyxJQUFoQjs7QUFHQSxRQUFJLFNBQVMsRUFBYjtBQUNBLFNBQUssTUFBTCxDQUFZLE9BQVosQ0FBcUIsVUFBUyxJQUFULEVBQWU7QUFDbkMsU0FBSSxTQUFTLElBQUksT0FBTyxNQUFYLENBQWtCLE1BQWxCLENBQWI7QUFDQTtBQUNBLFlBQU8sWUFBUCxDQUFxQixLQUFLLGFBQTFCLEVBQXlDLFlBQVc7QUFDakQ7QUFDQTtBQUNBLGNBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxVQUFJLFFBQVEsT0FBTyxTQUFQLENBQWlCO0FBQzdCLGVBQVEsV0FEcUI7QUFFN0IsbUJBQVksSUFGaUI7QUFHN0IsY0FBTyxHQUhzQjtBQUk1QixlQUFRO0FBSm9CLE9BQWpCLENBQVo7QUFNQSxhQUFPLEtBQVA7QUFDRixXQUFLLElBQUwsQ0FBVTtBQUNULFdBQUksTUFBTSxLQUFLLE1BRE47QUFFVCxhQUFLLEtBQUssVUFGRDtBQUdULGNBQU0sS0FBSyxTQUFMLElBQWtCLENBSGY7QUFJVCxjQUFPO0FBQ1A7QUFMUyxPQUFWO0FBT0EsTUFsQkQ7QUFtQkEsS0F0QkQ7QUF1QkEsU0FBSyxJQUFMLENBQVU7QUFDVCxTQUFJLE9BREs7QUFFVCxjQUFRLEtBQUs7QUFGSixLQUFWO0FBSUEsU0FBSyxRQUFMLENBQWM7QUFDYixpQkFBWTtBQURDLEtBQWQ7QUFHQTtBQUNBLFdBQU8sY0FBUCxDQUFzQixTQUF0QjtBQUNBLElBdENvQixDQXNDbkIsSUF0Q21CLENBc0NkLElBdENjLENBQXJCOztBQXdDQztBQUNBLFVBQU8sRUFBUCxDQUFVLFdBQVYsRUFBdUIsWUFBWTtBQUNqQyxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsU0FBdkI7QUFDRCxJQUZEO0FBSUE7Ozs0QkFFUztBQUNULFVBQU8sSUFBUCxDQUFZLE9BQVo7QUFDQTs7OzJCQUtPO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVI7QUFDRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEdBQXRCLENBQTBCLFVBQUMsSUFBRDtBQUFBLFlBQzFCLDhCQUFDLE1BQUQsSUFBUSxJQUFJLEtBQUssRUFBakIsRUFBcUIsTUFBUSxLQUFLLElBQWxDLEVBQXdDLE9BQU8sS0FBSyxLQUFwRCxFQUEyRCxPQUFPLEtBQUssS0FBdkUsRUFBOEUsU0FBUyxLQUFLLE9BQTVGLEdBRDBCO0FBQUEsS0FBMUI7QUFERixJQUREO0FBVUE7Ozs7RUE3RWtDLGdCQUFNLFM7O2tCQUFyQixNIiwiZmlsZSI6InJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudmFyIFBsYXllciA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2IGlkPXtwcm9wcy5pZH0gPlxuXHR7cHJvcHMubmFtZSA/IGBVc2VyICR7cHJvcHMubmFtZX0gaGFkICR7cHJvcHMudm90ZXN9IHZvdGVzLiBgIDogbnVsbH1cblx0e3Byb3BzLmdvQWdhaW4gPyAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nb0FnYWlufT5QbGF5IGFnYWluPzwvYnV0dG9uPiA6IDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0vPiB9XG5cblx0PC9kaXY+XG5cdClcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZW5kZXJJbmZvOltdXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1x0XHRcblxuXG5cdFx0dmFyIGluZm8gPSBbXTtcblx0XHRzb2NrZXQub24oJ3Jlc3VsdHMnLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Ly90aW1lIGZvciBjb3VudGRvd25cblx0XHRcdHZhciB0aW1lID0gZGF0YS50aW1lO1xuXG5cblx0XHRcdHZhciBpbWFnZXMgPSBbXTtcblx0XHRcdGRhdGEuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCd0ZXN0Jylcblx0XHRcdFx0Ly8gaW1hZ2VzLnB1c2goYmxvYi52ZWN0b3JEcmF3aW5nKTtcblx0XHRcdFx0Y2FudmFzLmxvYWRGcm9tSlNPTiggYmxvYi52ZWN0b3JEcmF3aW5nLCBmdW5jdGlvbigpIHtcblx0XHRcdCAgXHRcdC8vIGNhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpXG5cdFx0XHQgIFx0XHQvLyB2YXIgYmxvYiA9IEpTT04ucGFyc2UoanNvbik7XG5cdFx0XHQgIFx0XHRjb25zb2xlLmxvZyhibG9iKTtcblx0XHRcdCAgXHRcdHZhciBpbWFnZSA9IGNhbnZhcy50b0RhdGFVUkwoe1xuXHRcdFx0XHRcdFx0XHRmb3JtYXQ6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdFx0XHRtdWx0aXBsaWVyOiAwLjI1LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzc1LFxuXHRcdFx0XHRcdFx0ICBoZWlnaHQ6IDM3NVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHQgIFx0XHRjYW52YXMuY2xlYXIoKTtcblx0XHRcdFx0XHRpbmZvLnB1c2goe1xuXHRcdFx0XHRcdFx0aWQ6ICdkJyArIGluZm8ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bmFtZTpibG9iLnBsYXllck5hbWUsXG5cdFx0XHRcdFx0XHR2b3RlczpibG9iLnZvdGVDb3VudCB8fCAwLFxuXHRcdFx0XHRcdFx0aW1hZ2U6IGltYWdlXG5cdFx0XHRcdFx0XHQvL3dpbnM6YmxvYi5yb3VuZFdpbnMgXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0XHRpbmZvLnB1c2goe1xuXHRcdFx0XHRpZDogJ2FnYWluJyxcblx0XHRcdFx0Z29BZ2Fpbjp0aGlzLmdvQWdhaW5cblx0XHRcdH0pXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cmVuZGVySW5mbzogaW5mb1xuXHRcdFx0fSlcblx0XHRcdC8vdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpXG5cdFx0XHRzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ3Jlc3VsdHMnKTtcblx0XHR9LmJpbmQodGhpcykpXG5cbiAgXHQvLyBsaXN0ZW4gdG8gc3dpdGNoIHRvIHJlYWR5Vmlld1xuICBcdHNvY2tldC5vbigncmVhZHlWaWV3JywgZnVuY3Rpb24gKCkgeyBcbiAgXHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcmVhZHknIFxuICBcdH0pO1xuXG4gIH1cblxuICBnb0FnYWluKCkge1xuICBcdHNvY2tldC5lbWl0KCdhZ2FpbicpO1xuICB9XG5cblxuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwidm90ZVwiPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5yZW5kZXJJbmZvLm1hcCgoZGF0YSkgPT4gXG5cdFx0XHRcdFx0PFBsYXllciBpZD17ZGF0YS5pZH0gbmFtZSA9IHtkYXRhLm5hbWV9IHZvdGVzPXtkYXRhLnZvdGVzfSBpbWFnZT17ZGF0YS5pbWFnZX0gZ29BZ2Fpbj17ZGF0YS5nb0FnYWlufS8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufSJdfQ==