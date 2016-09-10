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

<<<<<<< 9ae8985755e8cc280b08982c368c279a07c846c3
=======
var Player = function Player(props) {
	return _react2.default.createElement(
		'div',
		{ id: props.id },
		'User ' + props.name + ' had ' + props.votes + ' votes. '
	);
};

>>>>>>> Rebase attempt
var Result = function (_React$Component) {
	_inherits(Result, _React$Component);

	function Result(props) {
		_classCallCheck(this, Result);

		return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));
	}

	_createClass(Result, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
<<<<<<< 9ae8985755e8cc280b08982c368c279a07c846c3
=======
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
						votes: blob.votes || 0
						//wins:blob.roundWins 
					});
				});

				this.setState({
					renderInfo: info
				});
>>>>>>> Rebase attempt

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

					image.src = canvas.toDataURL("image/png");
					count++;
					var id = 'd' + count;
					document.getElementById(id).appendChild(image);
					canvas.clear();

					//place image on canvas/page appropriately
				});
				//canvas.renderAll.bind(canvas)
				// })
			});
			canvas.dispose();
			// var parent = document.getElementById("vote");
			// var child = document.getElementById("test");
			// parent.removeChild(child);

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
<<<<<<< 9ae8985755e8cc280b08982c368c279a07c846c3
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3Jlc3VsdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUNwQixpQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUdBQ1osS0FEWTtBQUVsQjs7Ozt1Q0FFcUI7O0FBRXBCO0FBQ0EsVUFBTyxFQUFQLENBQVUsV0FBVixFQUF1QixZQUFZO0FBQ2pDLFdBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixTQUF2QjtBQUNELElBRkQ7QUFJQTs7O2tDQUVlO0FBQ2Y7QUFDQSxVQUFPLElBQVAsQ0FBWSxPQUFaO0FBQ0E7OzsyQkFFTztBQUNSLFVBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUUsOENBQVEsT0FBTSwwQkFBZCxFQUF5QyxTQUFTLEtBQUssYUFBdkQ7QUFGRixJQUREO0FBTUE7Ozs7RUExQmtDLGdCQUFNLFM7O2tCQUFyQixNIiwiZmlsZSI6InJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICBcdC8vIGxpc3RlbiB0byBzd2l0Y2ggdG8gcmVhZHlWaWV3XG4gIFx0c29ja2V0Lm9uKCdyZWFkeVZpZXcnLCBmdW5jdGlvbiAoKSB7IFxuICBcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZWFkeScgXG4gIFx0fSk7XG5cbiAgfVxuXG4gIHNlbmRQbGF5QWdhaW4oKSB7XG4gIFx0Ly8gZW1pdCBldmVudCB0byBzZXJ2ZXJcblx0ICBzb2NrZXQuZW1pdCgnYWdhaW4nKTtcbiAgfVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdCAgPGRpdj5XZSdyZSBhbGwgd2lubmVycy48L2Rpdj5cblx0XHRcdCAgPGJ1dHRvbiB2YWx1ZT1cIkp1c3Qga2lkZGluZywgcGxheSBhZ2FpblwiIG9uQ2xpY2s9e3RoaXMuc2VuZFBsYXlBZ2Fpbn0+PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0fVxufSJdfQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXdzL3Jlc3VsdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFNBQVQsTUFBUyxDQUFDLEtBQUQ7QUFBQSxRQUNaO0FBQUE7QUFBQSxJQUFLLElBQUksTUFBTSxFQUFmO0FBQUEsWUFDUyxNQUFNLElBRGYsYUFDMkIsTUFBTSxLQURqQztBQUFBLEVBRFk7QUFBQSxDQUFiOztJQU1xQixNOzs7QUFDcEIsaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNaLEtBRFk7O0FBRWxCLFFBQUssS0FBTCxHQUFhO0FBQ1osZUFBWTtBQURBLEdBQWI7QUFGa0I7QUFLbEI7Ozs7dUNBRW9CO0FBQ3BCLE9BQUksT0FBTyxFQUFYO0FBQ0EsVUFBTyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFVLElBQVYsRUFBZ0I7QUFDcEM7QUFDQSxRQUFJLE9BQU8sS0FBSyxJQUFoQjs7QUFHQSxRQUFJLFNBQVMsRUFBYjtBQUNBLFNBQUssTUFBTCxDQUFZLE9BQVosQ0FBcUIsVUFBUyxJQUFULEVBQWU7QUFDbkMsYUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLFlBQU8sSUFBUCxDQUFZLEtBQUssYUFBakI7QUFDQSxVQUFLLElBQUwsQ0FBVTtBQUNULFVBQUksTUFBTSxLQUFLLE1BRE47QUFFVCxZQUFLLEtBQUssVUFGRDtBQUdULGFBQU0sS0FBSyxLQUFMLElBQWM7QUFDcEI7QUFKUyxNQUFWO0FBTUEsS0FURDs7QUFXQSxTQUFLLFFBQUwsQ0FBYztBQUNiLGlCQUFZO0FBREMsS0FBZDs7QUFLQztBQUNBO0FBQ0EsU0FBSyxjQUFMLENBQW9CLE1BQXBCO0FBR0QsSUEzQm9CLENBMkJuQixJQTNCbUIsQ0EyQmQsSUEzQmMsQ0FBckI7QUE4QkE7OztpQ0FFYyxHLEVBQUk7QUFDbEI7QUFDQyxPQUFJLFNBQVMsSUFBSSxPQUFPLE1BQVgsQ0FBa0IsTUFBbEIsQ0FBYjtBQUNBLE9BQUksWUFBWSxFQUFoQjtBQUNBLE9BQUksUUFBUSxDQUFDLENBQWI7QUFDQSxPQUFJLE9BQUosQ0FBWSxVQUFTLEdBQVQsRUFBYzs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVHLFdBQU8sWUFBUCxDQUFxQixHQUFyQixFQUEwQixZQUFXO0FBQ3BDO0FBQ0E7QUFDQSxTQUFJLFFBQVEsSUFBSSxLQUFKLEVBQVo7O0FBRUEsV0FBTSxHQUFOLEdBQVksT0FBTyxTQUFQLENBQWlCLFdBQWpCLENBQVo7QUFDQTtBQUNBLFNBQUksS0FBSyxNQUFNLEtBQWY7QUFDQSxjQUFTLGNBQVQsQ0FBd0IsRUFBeEIsRUFBNEIsV0FBNUIsQ0FBd0MsS0FBeEM7QUFDQSxZQUFPLEtBQVA7O0FBRUE7QUFDQSxLQVpEO0FBYUg7QUFDRDtBQUVFLElBekJEO0FBMEJBLFVBQU8sT0FBUDtBQUNBO0FBQ0E7QUFDQTs7QUFHRDs7OzJCQUdRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVI7QUFDRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEdBQXRCLENBQTBCLFVBQUMsSUFBRDtBQUFBLFlBQzFCLDhCQUFDLE1BQUQsSUFBUSxJQUFJLEtBQUssRUFBakIsRUFBcUIsTUFBUSxLQUFLLElBQWxDLEVBQXdDLE9BQU8sS0FBSyxLQUFwRCxHQUQwQjtBQUFBLEtBQTFCLENBREY7QUFJQyw4Q0FBUSxJQUFHLE1BQVgsRUFBa0IsT0FBTSxNQUF4QixFQUErQixRQUFPLEtBQXRDLEVBQTRDLFNBQVEsTUFBcEQ7QUFKRCxJQUREO0FBWUE7Ozs7RUEvRmtDLGdCQUFNLFM7O0FBbUcxQzs7O2tCQW5HcUIsTSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnZhciBQbGF5ZXIgPSAocHJvcHMpID0+IChcblx0PGRpdiBpZD17cHJvcHMuaWR9ID5cblx0e2BVc2VyICR7cHJvcHMubmFtZX0gaGFkICR7cHJvcHMudm90ZXN9IHZvdGVzLiBgfVxuXHQ8L2Rpdj5cblx0KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZW5kZXJJbmZvOiBbXVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR2YXIgaW5mbyA9IFtdO1xuXHRcdHNvY2tldC5vbigncmVzdWx0cycsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHQvL3RpbWUgZm9yIGNvdW50ZG93blxuXHRcdFx0dmFyIHRpbWUgPSBkYXRhLnRpbWU7XG5cblxuXHRcdFx0dmFyIGltYWdlcyA9IFtdO1xuXHRcdFx0ZGF0YS5pbWFnZXMuZm9yRWFjaCggZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhibG9iKTtcblx0XHRcdFx0aW1hZ2VzLnB1c2goYmxvYi52ZWN0b3JEcmF3aW5nKTtcblx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRpZDogJ2QnICsgaW5mby5sZW5ndGgsXG5cdFx0XHRcdFx0bmFtZTpibG9iLnBsYXllck5hbWUsXG5cdFx0XHRcdFx0dm90ZXM6YmxvYi52b3RlcyB8fCAwXG5cdFx0XHRcdFx0Ly93aW5zOmJsb2Iucm91bmRXaW5zIFxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cblxuXHRcdCAgLy8gcmVkaXJlY3QgdG8gdm90aW5nIHZpZXdcblx0XHQgIC8vIGltYWdlcyBpcyBhbiBhcnJheSBvZiBKU09OLnN0cmluZ2lmeShjYW52YXMpIG9iamVjdHMgdG8gdm90ZSBvblxuXHRcdCAgdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpO1xuXG5cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cblx0fVxuXG5cdHJlbmRlckRyYXdpbmdzKGFycil7XG5cdFx0Ly8gYXJyLmZvckVhY2goZnVuY3Rpb24ocGljKSB7XG5cdFx0XHR2YXIgY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoJ3Rlc3QnKVxuXHRcdFx0dmFyIGltYWdlRGF0YSA9IFtdO1xuXHRcdFx0dmFyIGNvdW50ID0gLTE7XG5cdFx0XHRhcnIuZm9yRWFjaChmdW5jdGlvbihwaWMpIHtcblxuXHRcdFx0Ly8gY2FudmFzLmxvYWRGcm9tSlNPTihqc29uLCBjYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKSwgZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0XHQvLyAgICAgdmFyIGRyYXdpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcblx0XHRcdC8vICAgICBpbWFnZS5zcmMgPSBkcmF3aW5ncy50b0RhdGFVcmwoXCJpbWFnZS9wbmdcIik7XG5cdFx0XHQvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvdGUnKS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cdFx0XHQvLyB9KTtcblxuXHRcdFx0ICBcdGNhbnZhcy5sb2FkRnJvbUpTT04oIHBpYywgZnVuY3Rpb24oKSB7XG5cdFx0XHQgIFx0XHQvLyBjYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKVxuXHRcdFx0ICBcdFx0Ly8gdmFyIGJsb2IgPSBKU09OLnBhcnNlKGpzb24pO1xuXHRcdFx0ICBcdFx0dmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cblx0XHRcdCAgXHRcdGltYWdlLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG5cdFx0XHQgIFx0XHRjb3VudCsrO1xuXHRcdFx0ICBcdFx0dmFyIGlkID0gJ2QnICsgY291bnQ7XG5cdFx0XHQgIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXHRcdFx0ICBcdFx0Y2FudmFzLmNsZWFyKCk7XG5cblx0XHRcdCAgXHRcdC8vcGxhY2UgaW1hZ2Ugb24gY2FudmFzL3BhZ2UgYXBwcm9wcmlhdGVseVxuXHRcdFx0ICBcdH0pO1xuXHRcdFx0Ly9jYW52YXMucmVuZGVyQWxsLmJpbmQoY2FudmFzKVxuXHRcdC8vIH0pXG5cdFx0XHRcdFxuXHRcdFx0fSlcblx0XHRcdGNhbnZhcy5kaXNwb3NlKCk7XG5cdFx0XHQvLyB2YXIgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b3RlXCIpO1xuXHRcdFx0Ly8gdmFyIGNoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0XCIpO1xuXHRcdFx0Ly8gcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcblxuXG5cdH07XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJ2b3RlXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnJlbmRlckluZm8ubWFwKChkYXRhKSA9PiBcblx0XHRcdFx0XHQ8UGxheWVyIGlkPXtkYXRhLmlkfSBuYW1lID0ge2RhdGEubmFtZX0gdm90ZXM9e2RhdGEudm90ZXN9Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGNhbnZhcyBpZD1cInRlc3RcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCI0MDBcIiBkaXNwbGF5PVwibm9uZVwiPjwvY2FudmFzPlxuXG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufVxuXG5cbi8ve3BsYXllck5hbWUsIHZvdGVDb3VudCwgaW1hZ2VEYXRhLCByb3VuZFdpbnN9Il19
>>>>>>> Rebase attempt
