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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3Jlc3VsdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFDLEtBQUQ7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLElBQUksTUFBTSxFQUFmO0FBQUEsWUFDUyxNQUFNLElBRGYsYUFDMkIsTUFBTSxLQURqQztBQUVBLHlDQUFLLEtBQUssTUFBTSxLQUFoQjtBQUZBLEVBRFk7QUFBQSxDQUFiOztJQVFxQixNOzs7QUFDcEIsaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNaLEtBRFk7O0FBRWxCLFFBQUssS0FBTCxHQUFhO0FBQ1osZUFBVztBQURDLEdBQWI7QUFGa0I7QUFLbEI7Ozs7dUNBRW9COztBQUdwQixPQUFJLE9BQU8sRUFBWDtBQUNBLFVBQU8sRUFBUCxDQUFVLFNBQVYsRUFBcUIsVUFBVSxJQUFWLEVBQWdCO0FBQ3BDO0FBQ0EsUUFBSSxPQUFPLEtBQUssSUFBaEI7O0FBR0EsUUFBSSxTQUFTLEVBQWI7QUFDQSxTQUFLLE1BQUwsQ0FBWSxPQUFaLENBQXFCLFVBQVMsSUFBVCxFQUFlO0FBQ25DLFNBQUksU0FBUyxJQUFJLE9BQU8sTUFBWCxDQUFrQixNQUFsQixDQUFiO0FBQ0E7QUFDQSxZQUFPLFlBQVAsQ0FBcUIsS0FBSyxhQUExQixFQUF5QyxZQUFXO0FBQ2pEO0FBQ0E7O0FBRUEsVUFBSSxRQUFRLE9BQU8sU0FBUCxDQUFpQjtBQUM3QixlQUFRLFdBRHFCO0FBRTdCLG1CQUFZLElBRmlCO0FBRzdCLGNBQU8sR0FIc0I7QUFJNUIsZUFBUTtBQUpvQixPQUFqQixDQUFaO0FBTUEsYUFBTyxLQUFQO0FBQ0YsV0FBSyxJQUFMLENBQVU7QUFDVCxXQUFJLE1BQU0sS0FBSyxNQUROO0FBRVQsYUFBSyxLQUFLLFVBRkQ7QUFHVCxjQUFNLEtBQUssS0FBTCxDQUFXLEtBQUssVUFBaEIsS0FBK0IsQ0FINUI7QUFJVCxjQUFPO0FBQ1A7QUFMUyxPQUFWO0FBT0EsTUFsQkQ7QUFtQkEsS0F0QkQ7O0FBd0JBLFlBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxTQUFLLFFBQUwsQ0FBYztBQUNiLGlCQUFZO0FBREMsS0FBZDs7QUFJQTtBQUVBLElBckNvQixDQXFDbkIsSUFyQ21CLENBcUNkLElBckNjLENBQXJCOztBQXVDQztBQUNBLFVBQU8sRUFBUCxDQUFVLFdBQVYsRUFBdUIsWUFBWTtBQUNqQyxXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsU0FBdkI7QUFDRCxJQUZEO0FBSUE7Ozs0QkFFUztBQUNULFVBQU8sSUFBUCxDQUFZLE9BQVo7QUFDQTs7OzJCQU1PO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVI7QUFDRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEdBQXRCLENBQTBCLFVBQUMsSUFBRDtBQUFBLFlBQzFCLDhCQUFDLE1BQUQsSUFBUSxJQUFJLEtBQUssRUFBakIsRUFBcUIsTUFBUSxLQUFLLElBQWxDLEVBQXdDLE9BQU8sS0FBSyxLQUFwRCxFQUEyRCxPQUFPLEtBQUssS0FBdkUsR0FEMEI7QUFBQSxLQUExQixDQURGO0FBSUM7QUFBQTtBQUFBLE9BQVEsU0FBUyxLQUFLLE9BQXRCO0FBQUE7QUFBQTtBQUpELElBREQ7QUFZQTs7OztFQS9Fa0MsZ0JBQU0sUzs7a0JBQXJCLE0iLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG52YXIgUGxheWVyID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgaWQ9e3Byb3BzLmlkfSA+XG5cdHtgVXNlciAke3Byb3BzLm5hbWV9IGhhZCAke3Byb3BzLnZvdGVzfSB2b3Rlcy4gYH1cblx0PGltZyBzcmM9e3Byb3BzLmltYWdlfS8+XG5cdDwvZGl2PlxuXHQpXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmVuZGVySW5mbzpbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcdFx0XG5cblxuXHRcdHZhciBpbmZvID0gW107XG5cdFx0c29ja2V0Lm9uKCdyZXN1bHRzJywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdC8vdGltZSBmb3IgY291bnRkb3duXG5cdFx0XHR2YXIgdGltZSA9IGRhdGEudGltZTtcblxuXG5cdFx0XHR2YXIgaW1hZ2VzID0gW107XG5cdFx0XHRkYXRhLmltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHRcdC8vIGltYWdlcy5wdXNoKGJsb2IudmVjdG9yRHJhd2luZyk7XG5cdFx0XHRcdGNhbnZhcy5sb2FkRnJvbUpTT04oIGJsb2IudmVjdG9yRHJhd2luZywgZnVuY3Rpb24oKSB7XG5cdFx0XHQgIFx0XHQvLyBjYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKVxuXHRcdFx0ICBcdFx0Ly8gdmFyIGJsb2IgPSBKU09OLnBhcnNlKGpzb24pO1xuXG5cdFx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBjYW52YXMudG9EYXRhVVJMKHtcblx0XHRcdFx0XHRcdFx0Zm9ybWF0OiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGllcjogMC4yNSxcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDM3NSxcblx0XHRcdFx0XHRcdCAgaGVpZ2h0OiAzNzVcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0ICBcdFx0Y2FudmFzLmNsZWFyKCk7XG5cdFx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRcdGlkOiAnZCcgKyBpbmZvLmxlbmd0aCxcblx0XHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lLFxuXHRcdFx0XHRcdFx0dm90ZXM6ZGF0YS52b3Rlc1tibG9iLnBsYXllck5hbWVdIHx8IDAsXG5cdFx0XHRcdFx0XHRpbWFnZTogaW1hZ2Vcblx0XHRcdFx0XHRcdC8vd2luczpibG9iLnJvdW5kV2lucyBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblxuXHRcdFx0Y29uc29sZS5sb2coaW5mbyk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cmVuZGVySW5mbzogaW5mb1xuXHRcdFx0fSlcblxuXHRcdFx0Ly90aGlzLnJlbmRlckRyYXdpbmdzKGltYWdlcylcblxuXHRcdH0uYmluZCh0aGlzKSlcblxuICBcdC8vIGxpc3RlbiB0byBzd2l0Y2ggdG8gcmVhZHlWaWV3XG4gIFx0c29ja2V0Lm9uKCdyZWFkeVZpZXcnLCBmdW5jdGlvbiAoKSB7IFxuICBcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZWFkeScgXG4gIFx0fSk7XG5cbiAgfVxuXG4gIGdvQWdhaW4oKSB7XG4gIFx0c29ja2V0LmVtaXQoJ2FnYWluJyk7XG4gIH1cblxuXG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInZvdGVcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucmVuZGVySW5mby5tYXAoKGRhdGEpID0+IFxuXHRcdFx0XHRcdDxQbGF5ZXIgaWQ9e2RhdGEuaWR9IG5hbWUgPSB7ZGF0YS5uYW1lfSB2b3Rlcz17ZGF0YS52b3Rlc30gaW1hZ2U9e2RhdGEuaW1hZ2V9Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdvQWdhaW59PlBsYXkgYWdhaW4/PC9idXR0b24+XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19