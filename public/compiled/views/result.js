"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function Player(props) {
	return _react2.default.createElement(
		"div",
		{ className: "resultInstance", id: props.id },
		props.name ? _react2.default.createElement(
			"p",
			null,
			_react2.default.createElement(
				"span",
				{ className: "userName" },
				props.name
			),
			" had ",
			_react2.default.createElement(
				"span",
				{ className: "numVotes" },
				props.votes
			),
			" votes. "
		) : null,
		props.goAgain ? _react2.default.createElement(
			"button",
			{ className: "btn waves-effect waves-light playAgain", onClick: props.goAgain },
			"Play again?"
		) : _react2.default.createElement("img", { src: props.image })
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
		key: "componentWillMount",
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
		key: "goAgain",
		value: function goAgain() {
			socket.emit('again');
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ id: "vote" },
				_react2.default.createElement(
					"h1",
					{ className: "results" },
					" Results! "
				),
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Player, { id: data.id, name: data.name, votes: data.votes, image: data.image, goAgain: data.goAgain });
				})
			);
		}
	}]);

	return Result;
}(_react2.default.Component);

exports.default = Result;
//# sourceMappingURL=data:application/json;base64,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V0E7Ozs7RUE5RWtDLGdCQUFNLFM7O2tCQUFyQixNIiwiZmlsZSI6InJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudmFyIFBsYXllciA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdEluc3RhbmNlXCIgaWQ9e3Byb3BzLmlkfSA+XG5cdHtwcm9wcy5uYW1lID8gPHA+PHNwYW4gY2xhc3NOYW1lPVwidXNlck5hbWVcIj57cHJvcHMubmFtZX08L3NwYW4+IGhhZCA8c3BhbiBjbGFzc05hbWU9XCJudW1Wb3Rlc1wiPntwcm9wcy52b3Rlc308L3NwYW4+IHZvdGVzLiA8L3A+OiBudWxsfVxuXHR7cHJvcHMuZ29BZ2FpbiA/ICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgcGxheUFnYWluXCIgb25DbGljaz17cHJvcHMuZ29BZ2Fpbn0+UGxheSBhZ2Fpbj88L2J1dHRvbj4gOiA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9Lz4gfVxuIFxuXHQ8L2Rpdj5cblx0KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86W11cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XHRcdFxuXG5cblx0XHR2YXIgaW5mbyA9IFtdO1xuXHRcdHNvY2tldC5vbigncmVzdWx0cycsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHQvL3RpbWUgZm9yIGNvdW50ZG93blxuXHRcdFx0dmFyIHRpbWUgPSBkYXRhLnRpbWU7XG5cblxuXHRcdFx0dmFyIGltYWdlcyA9IFtdO1xuXHRcdFx0ZGF0YS5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ3Rlc3QnKVxuXHRcdFx0XHQvLyBpbWFnZXMucHVzaChibG9iLnZlY3RvckRyYXdpbmcpO1xuXHRcdFx0XHRjYW52YXMubG9hZEZyb21KU09OKCBibG9iLnZlY3RvckRyYXdpbmcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0ICBcdFx0Ly8gY2FudmFzLnJlbmRlckFsbC5iaW5kKGNhbnZhcylcblx0XHRcdCAgXHRcdC8vIHZhciBibG9iID0gSlNPTi5wYXJzZShqc29uKTtcblx0XHRcdCAgXHRcdGNvbnNvbGUubG9nKGJsb2IpO1xuXHRcdFx0ICBcdFx0dmFyIGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCh7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdFx0XHRcdG11bHRpcGxpZXI6IDAuMjUsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzNzUsXG5cdFx0XHRcdFx0XHQgIGhlaWdodDogMzc1XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXHRcdFx0XHRcdGluZm8ucHVzaCh7XG5cdFx0XHRcdFx0XHRpZDogJ2QnICsgaW5mby5sZW5ndGgsXG5cdFx0XHRcdFx0XHRuYW1lOmJsb2IucGxheWVyTmFtZSxcblx0XHRcdFx0XHRcdHZvdGVzOmJsb2Iudm90ZUNvdW50IHx8IDAsXG5cdFx0XHRcdFx0XHRpbWFnZTogaW1hZ2Vcblx0XHRcdFx0XHRcdC8vd2luczpibG9iLnJvdW5kV2lucyBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHRcdGluZm8ucHVzaCh7XG5cdFx0XHRcdGlkOiAnYWdhaW4nLFxuXHRcdFx0XHRnb0FnYWluOnRoaXMuZ29BZ2FpblxuXHRcdFx0fSlcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZW5kZXJJbmZvOiBpbmZvXG5cdFx0XHR9KVxuXHRcdFx0Ly90aGlzLnJlbmRlckRyYXdpbmdzKGltYWdlcylcblx0XHRcdHNvY2tldC5yZW1vdmVMaXN0ZW5lcigncmVzdWx0cycpO1xuXHRcdH0uYmluZCh0aGlzKSlcblxuICBcdC8vIGxpc3RlbiB0byBzd2l0Y2ggdG8gcmVhZHlWaWV3XG4gIFx0c29ja2V0Lm9uKCdyZWFkeVZpZXcnLCBmdW5jdGlvbiAoKSB7IFxuICBcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZWFkeScgXG4gIFx0fSk7XG5cbiAgfVxuXG4gIGdvQWdhaW4oKSB7XG4gIFx0c29ja2V0LmVtaXQoJ2FnYWluJyk7XG4gIH1cblxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCI+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJyZXN1bHRzXCI+IFJlc3VsdHMhIDwvaDE+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8UGxheWVyIGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90ZXM9e2RhdGEudm90ZXN9IGltYWdlPXtkYXRhLmltYWdlfSBnb0FnYWluPXtkYXRhLmdvQWdhaW59Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19