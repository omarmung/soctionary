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
		'User ' + props.name + ' had ' + props.votes + ' votes. ',
		_react2.default.createElement('img', { src: props.image })
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
		key: 'renderDrawings',
		value: function renderDrawings(arr) {
			// arr.forEach(function(pic) {
			var canvas = new fabric.Canvas('test');
			var imageData = [];
			var count = -1;
			arr.forEach(function (pic) {

				// canvas.loadFromJSON(json, canvas.renderAll.bind(canvas), function() {
				//     var image = new Image();
				//     var drawings = document.getElementById('test');
				//     image.src = drawings.toDataUrl("image/png");
				//     document.getElementById('vote').appendChild(image);
				// });

				canvas.loadFromJSON(pic, function () {
					// canvas.renderAll.bind(canvas)
					// var blob = JSON.parse(json);
					var image = new Image();

					image.src = canvas.toDataURL({
						format: 'image/png',
						multiplier: 0.25,
						width: 375,
						height: 375
					});
					count++;
					var id = 'd' + count;
					document.getElementById(id).appendChild(image);
					canvas.clear();

					//place image on canvas/page appropriately
				});
				//canvas.renderAll.bind(canvas)
				// })
			});
			// var parent = document.getElementById("vote");
			// var child = document.getElementById("test");
			// parent.removeChild(child);

		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ id: 'vote' },
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Player, { id: data.id, name: data.name, votes: data.votes, image: data.image });
				}),
				_react2.default.createElement(
					'button',
					{ onClick: this.goAgain },
					'Play again?'
				)
			);
		}
	}]);

	return Result;
}(_react2.default.Component);

exports.default = Result;
//# sourceMappingURL=data:application/json;base64,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QixHQUF0QixDQUEwQixVQUFDLElBQUQ7QUFBQSxZQUMxQiw4QkFBQyxNQUFELElBQVEsSUFBSSxLQUFLLEVBQWpCLEVBQXFCLE1BQVEsS0FBSyxJQUFsQyxFQUF3QyxPQUFPLEtBQUssS0FBcEQsRUFBMkQsT0FBTyxLQUFLLEtBQXZFLEdBRDBCO0FBQUEsS0FBMUIsQ0FERjtBQUlDO0FBQUE7QUFBQSxPQUFRLFNBQVMsS0FBSyxPQUF0QjtBQUFBO0FBQUE7QUFKRCxJQUREO0FBWUE7Ozs7RUF6SGtDLGdCQUFNLFM7O2tCQUFyQixNIiwiZmlsZSI6InJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudmFyIFBsYXllciA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2IGlkPXtwcm9wcy5pZH0gPlxuXHR7YFVzZXIgJHtwcm9wcy5uYW1lfSBoYWQgJHtwcm9wcy52b3Rlc30gdm90ZXMuIGB9XG5cdDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0vPlxuXHQ8L2Rpdj5cblx0KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86W11cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHRcdFxuXG5cblx0XHR2YXIgaW5mbyA9IFtdO1xuXHRcdHNvY2tldC5vbigncmVzdWx0cycsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHQvL3RpbWUgZm9yIGNvdW50ZG93blxuXHRcdFx0dmFyIHRpbWUgPSBkYXRhLnRpbWU7XG5cblxuXHRcdFx0dmFyIGltYWdlcyA9IFtdO1xuXHRcdFx0ZGF0YS5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ3Rlc3QnKVxuXHRcdFx0XHQvLyBpbWFnZXMucHVzaChibG9iLnZlY3RvckRyYXdpbmcpO1xuXHRcdFx0XHRjYW52YXMubG9hZEZyb21KU09OKCBibG9iLnZlY3RvckRyYXdpbmcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ICBcdFx0Ly8gY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHRcdCAgXHRcdC8vIHZhciBibG9iID0gSlNPTi5wYXJzZShqc29uKTtcblxuXHRcdFx0ICBcdFx0dmFyIGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCh7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdFx0XHRcdG11bHRpcGxpZXI6IDAuMjUsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzNzUsXG5cdFx0XHRcdFx0XHQgIGhlaWdodDogMzc1XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXHRcdFx0XHRcdGluZm8ucHVzaCh7XG5cdFx0XHRcdFx0XHRpZDogJ2QnICsgaW5mby5sZW5ndGgsXG5cdFx0XHRcdFx0XHRuYW1lOmJsb2IucGxheWVyTmFtZSxcblx0XHRcdFx0XHRcdHZvdGVzOmRhdGEudm90ZXNbYmxvYi5wbGF5ZXJOYW1lXSB8fCAwLFxuXHRcdFx0XHRcdFx0aW1hZ2U6IGltYWdlXG5cdFx0XHRcdFx0XHQvL3dpbnM6YmxvYi5yb3VuZFdpbnMgXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cblx0XHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cblx0XHRcdC8vdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpXG5cblx0XHR9LmJpbmQodGhpcykpXG5cbiAgXHQvLyBsaXN0ZW4gdG8gc3dpdGNoIHRvIHJlYWR5Vmlld1xuICBcdHNvY2tldC5vbigncmVhZHlWaWV3JywgZnVuY3Rpb24gKCkgeyBcbiAgXHQgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvcmVhZHknIFxuICBcdH0pO1xuXG4gIH1cblxuICBnb0FnYWluKCkge1xuICBcdHNvY2tldC5lbWl0KCdhZ2FpbicpO1xuICB9XG5cblxuXG5cdHJlbmRlckRyYXdpbmdzKGFycil7XG5cdFx0Ly8gYXJyLmZvckVhY2goZnVuY3Rpb24ocGljKSB7XG5cdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ3Rlc3QnKVxuXHRcdFx0dmFyIGltYWdlRGF0YSA9IFtdO1xuXHRcdFx0dmFyIGNvdW50ID0gLTE7XG5cdFx0XHRhcnIuZm9yRWFjaChmdW5jdGlvbihwaWMpIHtcblxuXHRcdFx0Ly8gY2FudmFzLmxvYWRGcm9tSlNPTihqc29uLCBjYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKSwgZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0XHQvLyAgICAgdmFyIGRyYXdpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcblx0XHRcdC8vICAgICBpbWFnZS5zcmMgPSBkcmF3aW5ncy50b0RhdGFVcmwoXCJpbWFnZS9wbmdcIik7XG5cdFx0XHQvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvdGUnKS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cdFx0XHQvLyB9KTtcblxuXHRcdFx0ICBcdGNhbnZhcy5sb2FkRnJvbUpTT04oIHBpYywgZnVuY3Rpb24oKSB7XG5cdFx0XHQgIFx0XHQvLyBjYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKVxuXHRcdFx0ICBcdFx0Ly8gdmFyIGJsb2IgPSBKU09OLnBhcnNlKGpzb24pO1xuXHRcdFx0ICBcdFx0dmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdCAgXHRcdGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoe1xuXHRcdFx0XHRcdFx0XHRmb3JtYXQ6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdFx0XHRtdWx0aXBsaWVyOiAwLjI1LFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzc1LFxuXHRcdFx0XHRcdFx0ICBoZWlnaHQ6IDM3NVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHQgIFx0XHRjb3VudCsrO1xuXHRcdFx0ICBcdFx0dmFyIGlkID0gJ2QnICsgY291bnQ7XG5cdFx0XHQgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXHRcdFx0ICBcdFx0Y2FudmFzLmNsZWFyKCk7XG5cblx0XHRcdCAgXHRcdC8vcGxhY2UgaW1hZ2Ugb24gY2FudmFzL3BhZ2UgYXBwcm9wcmlhdGVseVxuXHRcdFx0ICBcdH0pO1xuXHRcdFx0Ly9jYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKVxuXHRcdC8vIH0pXG5cdFx0XHRcdFxuXHRcdFx0fSlcblx0XHRcdC8vIHZhciBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvdGVcIik7XG5cdFx0XHQvLyB2YXIgY2hpbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RcIik7XG5cdFx0XHQvLyBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXG5cblx0fTtcblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInZvdGVcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucmVuZGVySW5mby5tYXAoKGRhdGEpID0+IFxuXHRcdFx0XHRcdDxQbGF5ZXIgaWQ9e2RhdGEuaWR9IG5hbWUgPSB7ZGF0YS5uYW1lfSB2b3Rlcz17ZGF0YS52b3Rlc30gaW1hZ2U9e2RhdGEuaW1hZ2V9Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdvQWdhaW59PlBsYXkgYWdhaW4/PC9idXR0b24+XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19