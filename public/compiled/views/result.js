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
		'User ' + props.name + ' had ' + props.votes + ' votes. '
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
					console.log(blob);
					images.push(blob.vectorDrawing);
					info.push({
						id: 'd' + info.length,
						name: blob.playerName,
						votes: data.votes[blob.playerName] || 0
						//wins:blob.roundWins 
					});
					console.log(info);
				});

				this.setState({
					renderInfo: info
				});

				this.renderDrawings(images);
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
					return _react2.default.createElement(Player, { id: data.id, name: data.name, votes: data.votes });
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
//# sourceMappingURL=data:application/json;base64,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OztrQkFBckIsTSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnZhciBQbGF5ZXIgPSAocHJvcHMpID0+IChcblx0PGRpdiBpZD17cHJvcHMuaWR9ID5cblx0e2BVc2VyICR7cHJvcHMubmFtZX0gaGFkICR7cHJvcHMudm90ZXN9IHZvdGVzLiBgfVxuXHQ8L2Rpdj5cblx0KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86W11cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHRcdFxuXG5cblx0XHR2YXIgaW5mbyA9IFtdO1xuXHRcdHNvY2tldC5vbigncmVzdWx0cycsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHQvL3RpbWUgZm9yIGNvdW50ZG93blxuXHRcdFx0dmFyIHRpbWUgPSBkYXRhLnRpbWU7XG5cblxuXHRcdFx0dmFyIGltYWdlcyA9IFtdO1xuXHRcdFx0ZGF0YS5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhibG9iKTtcblx0XHRcdFx0aW1hZ2VzLnB1c2goYmxvYi52ZWN0b3JEcmF3aW5nKTtcblx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRpZDogJ2QnICsgaW5mby5sZW5ndGgsXG5cdFx0XHRcdFx0bmFtZTpibG9iLnBsYXllck5hbWUsXG5cdFx0XHRcdFx0dm90ZXM6ZGF0YS52b3Rlc1tibG9iLnBsYXllck5hbWVdIHx8IDBcblx0XHRcdFx0XHQvL3dpbnM6YmxvYi5yb3VuZFdpbnMgXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cblx0XHRcdHRoaXMucmVuZGVyRHJhd2luZ3MoaW1hZ2VzKVxuXG5cdFx0fS5iaW5kKHRoaXMpKVxuXG4gIFx0Ly8gbGlzdGVuIHRvIHN3aXRjaCB0byByZWFkeVZpZXdcbiAgXHRzb2NrZXQub24oJ3JlYWR5VmlldycsIGZ1bmN0aW9uICgpIHsgXG4gIFx0ICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3JlYWR5JyBcbiAgXHR9KTtcblxuICB9XG5cbiAgZ29BZ2FpbigpIHtcbiAgXHRzb2NrZXQuZW1pdCgnYWdhaW4nKTtcbiAgfVxuXG5cblxuXHRyZW5kZXJEcmF3aW5ncyhhcnIpe1xuXHRcdC8vIGFyci5mb3JFYWNoKGZ1bmN0aW9uKHBpYykge1xuXHRcdFx0dmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCd0ZXN0Jylcblx0XHRcdHZhciBpbWFnZURhdGEgPSBbXTtcblx0XHRcdHZhciBjb3VudCA9IC0xO1xuXHRcdFx0YXJyLmZvckVhY2goZnVuY3Rpb24ocGljKSB7XG5cblx0XHRcdC8vIGNhbnZhcy5sb2FkRnJvbUpTT04oanNvbiwgY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcyksIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0Ly8gICAgIHZhciBkcmF3aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0Jyk7XG5cdFx0XHQvLyAgICAgaW1hZ2Uuc3JjID0gZHJhd2luZ3MudG9EYXRhVXJsKFwiaW1hZ2UvcG5nXCIpO1xuXHRcdFx0Ly8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b3RlJykuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXHRcdFx0Ly8gfSk7XG5cblx0XHRcdCAgXHRjYW52YXMubG9hZEZyb21KU09OKCBwaWMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ICBcdFx0Ly8gY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHRcdCAgXHRcdC8vIHZhciBibG9iID0gSlNPTi5wYXJzZShqc29uKTtcblx0XHRcdCAgXHRcdHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG5cdFx0XHQgIFx0XHRpbWFnZS5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGllcjogMC4yNSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM3NSxcblx0XHRcdFx0XHRcdCAgaGVpZ2h0OiAzNzVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0ICBcdFx0Y291bnQrKztcblx0XHRcdCAgXHRcdHZhciBpZCA9ICdkJyArIGNvdW50O1xuXHRcdFx0ICBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFwcGVuZENoaWxkKGltYWdlKTtcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXG5cdFx0XHQgIFx0XHQvL3BsYWNlIGltYWdlIG9uIGNhbnZhcy9wYWdlIGFwcHJvcHJpYXRlbHlcblx0XHRcdCAgXHR9KTtcblx0XHRcdC8vY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHQvLyB9KVxuXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0XHQvLyB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RlXCIpO1xuXHRcdFx0Ly8gdmFyIGNoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0XCIpO1xuXHRcdFx0Ly8gcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcblxuXG5cdH07XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8UGxheWVyIGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90ZXM9e2RhdGEudm90ZXN9Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdvQWdhaW59PlBsYXkgYWdhaW4/PC9idXR0b24+XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19