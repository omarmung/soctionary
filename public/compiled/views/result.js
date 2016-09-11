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
							votes: data.votes[blob.playerName] || 0,
							image: image
							//wins:blob.roundWins 
						});
					});
				});
				info.push({
					id: 'again',
					goAgain: this.goAgain
				});
				console.log(info);
				this.setState({
					renderInfo: info
				});

				//this.renderDrawings(images)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3Jlc3VsdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFDLEtBQUQ7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLElBQUksTUFBTSxFQUFmO0FBQ0MsUUFBTSxJQUFOLGFBQXFCLE1BQU0sSUFBM0IsYUFBdUMsTUFBTSxLQUE3QyxnQkFBK0QsSUFEaEU7QUFFQyxRQUFNLE9BQU4sR0FBaUI7QUFBQTtBQUFBLEtBQVEsU0FBUyxNQUFNLE9BQXZCO0FBQUE7QUFBQSxHQUFqQixHQUF3RSx1Q0FBSyxLQUFLLE1BQU0sS0FBaEI7QUFGekUsRUFEWTtBQUFBLENBQWI7O0lBU3FCLE07OztBQUNwQixpQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1osS0FEWTs7QUFFbEIsUUFBSyxLQUFMLEdBQWE7QUFDWixlQUFXO0FBREMsR0FBYjtBQUZrQjtBQUtsQjs7Ozt1Q0FFb0I7O0FBR3BCLE9BQUksT0FBTyxFQUFYO0FBQ0EsVUFBTyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFVLElBQVYsRUFBZ0I7QUFDcEM7QUFDQSxRQUFJLE9BQU8sS0FBSyxJQUFoQjs7QUFHQSxRQUFJLFNBQVMsRUFBYjtBQUNBLFNBQUssTUFBTCxDQUFZLE9BQVosQ0FBcUIsVUFBUyxJQUFULEVBQWU7QUFDbkMsU0FBSSxTQUFTLElBQUksT0FBTyxNQUFYLENBQWtCLE1BQWxCLENBQWI7QUFDQTtBQUNBLFlBQU8sWUFBUCxDQUFxQixLQUFLLGFBQTFCLEVBQXlDLFlBQVc7QUFDakQ7QUFDQTs7QUFFQSxVQUFJLFFBQVEsT0FBTyxTQUFQLENBQWlCO0FBQzdCLGVBQVEsV0FEcUI7QUFFN0IsbUJBQVksSUFGaUI7QUFHN0IsY0FBTyxHQUhzQjtBQUk1QixlQUFRO0FBSm9CLE9BQWpCLENBQVo7QUFNQSxhQUFPLEtBQVA7QUFDRixXQUFLLElBQUwsQ0FBVTtBQUNULFdBQUksTUFBTSxLQUFLLE1BRE47QUFFVCxhQUFLLEtBQUssVUFGRDtBQUdULGNBQU0sS0FBSyxLQUFMLENBQVcsS0FBSyxVQUFoQixLQUErQixDQUg1QjtBQUlULGNBQU87QUFDUDtBQUxTLE9BQVY7QUFPQSxNQWxCRDtBQW1CQSxLQXRCRDtBQXVCQSxTQUFLLElBQUwsQ0FBVTtBQUNULFNBQUksT0FESztBQUVULGNBQVEsS0FBSztBQUZKLEtBQVY7QUFJQSxZQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsU0FBSyxRQUFMLENBQWM7QUFDYixpQkFBWTtBQURDLEtBQWQ7O0FBSUE7QUFFQSxJQXhDb0IsQ0F3Q25CLElBeENtQixDQXdDZCxJQXhDYyxDQUFyQjs7QUEwQ0M7QUFDQSxVQUFPLEVBQVAsQ0FBVSxXQUFWLEVBQXVCLFlBQVk7QUFDakMsV0FBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLFNBQXZCO0FBQ0QsSUFGRDtBQUlBOzs7NEJBRVM7QUFDVCxVQUFPLElBQVAsQ0FBWSxPQUFaO0FBQ0E7OzsyQkFNTztBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssSUFBRyxNQUFSO0FBQ0UsU0FBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixHQUF0QixDQUEwQixVQUFDLElBQUQ7QUFBQSxZQUMxQiw4QkFBQyxNQUFELElBQVEsSUFBSSxLQUFLLEVBQWpCLEVBQXFCLE1BQVEsS0FBSyxJQUFsQyxFQUF3QyxPQUFPLEtBQUssS0FBcEQsRUFBMkQsT0FBTyxLQUFLLEtBQXZFLEVBQThFLFNBQVMsS0FBSyxPQUE1RixHQUQwQjtBQUFBLEtBQTFCO0FBREYsSUFERDtBQVVBOzs7O0VBaEZrQyxnQkFBTSxTOztrQkFBckIsTSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnZhciBQbGF5ZXIgPSAocHJvcHMpID0+IChcblx0PGRpdiBpZD17cHJvcHMuaWR9ID5cblx0e3Byb3BzLm5hbWUgPyBgVXNlciAke3Byb3BzLm5hbWV9IGhhZCAke3Byb3BzLnZvdGVzfSB2b3Rlcy4gYCA6IG51bGx9XG5cdHtwcm9wcy5nb0FnYWluID8gIDxidXR0b24gb25DbGljaz17cHJvcHMuZ29BZ2Fpbn0+UGxheSBhZ2Fpbj88L2J1dHRvbj4gOiA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9Lz4gfVxuXG5cdDwvZGl2PlxuXHQpXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmVuZGVySW5mbzpbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcdFx0XG5cblxuXHRcdHZhciBpbmZvID0gW107XG5cdFx0c29ja2V0Lm9uKCdyZXN1bHRzJywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdC8vdGltZSBmb3IgY291bnRkb3duXG5cdFx0XHR2YXIgdGltZSA9IGRhdGEudGltZTtcblxuXG5cdFx0XHR2YXIgaW1hZ2VzID0gW107XG5cdFx0XHRkYXRhLmltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHRcdC8vIGltYWdlcy5wdXNoKGJsb2IudmVjdG9yRHJhd2luZyk7XG5cdFx0XHRcdGNhbnZhcy5sb2FkRnJvbUpTT04oIGJsb2IudmVjdG9yRHJhd2luZywgZnVuY3Rpb24oKSB7XG5cdFx0XHQgIFx0XHQvLyBjYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKVxuXHRcdFx0ICBcdFx0Ly8gdmFyIGJsb2IgPSBKU09OLnBhcnNlKGpzb24pO1xuXG5cdFx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGllcjogMC4yNSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM3NSxcblx0XHRcdFx0XHRcdCAgaGVpZ2h0OiAzNzVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0ICBcdFx0Y2FudmFzLmNsZWFyKCk7XG5cdFx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRcdGlkOiAnZCcgKyBpbmZvLmxlbmd0aCxcblx0XHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lLFxuXHRcdFx0XHRcdFx0dm90ZXM6ZGF0YS52b3Rlc1tibG9iLnBsYXllck5hbWVdIHx8IDAsXG5cdFx0XHRcdFx0XHRpbWFnZTogaW1hZ2Vcblx0XHRcdFx0XHRcdC8vd2luczpibG9iLnJvdW5kV2lucyBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHRcdGluZm8ucHVzaCh7XG5cdFx0XHRcdGlkOiAnYWdhaW4nLFxuXHRcdFx0XHRnb0FnYWluOnRoaXMuZ29BZ2FpblxuXHRcdFx0fSlcblx0XHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cblx0XHRcdC8vdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpXG5cblx0XHR9LmJpbmQodGhpcykpXG5cbiAgXHQvLyBsaXN0ZW4gdG8gc3dpdGNoIHRvIHJlYWR5Vmlld1xuICBcdHNvY2tldC5vbigncmVhZHlWaWV3JywgZnVuY3Rpb24gKCkgeyBcbiAgXHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcmVhZHknIFxuICBcdH0pO1xuXG4gIH1cblxuICBnb0FnYWluKCkge1xuICBcdHNvY2tldC5lbWl0KCdhZ2FpbicpO1xuICB9XG5cblxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8UGxheWVyIGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90ZXM9e2RhdGEudm90ZXN9IGltYWdlPXtkYXRhLmltYWdlfSBnb0FnYWluPXtkYXRhLmdvQWdhaW59Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19