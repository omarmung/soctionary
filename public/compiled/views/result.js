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
//# sourceMappingURL=data:application/json;base64,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YWN0J1xuXG52YXIgUGxheWVyID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgaWQ9e3Byb3BzLmlkfSA+XG5cdHtgVXNlciAke3Byb3BzLm5hbWV9IGhhZCAke3Byb3BzLnZvdGVzfSB2b3Rlcy4gYH1cblx0PC9kaXY+XG5cdClcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZW5kZXJJbmZvOltdXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1x0XHRcblxuXG5cdFx0dmFyIGluZm8gPSBbXTtcblx0XHRzb2NrZXQub24oJ3Jlc3VsdHMnLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Ly90aW1lIGZvciBjb3VudGRvd25cblx0XHRcdHZhciB0aW1lID0gZGF0YS50aW1lO1xuXG5cblx0XHRcdHZhciBpbWFnZXMgPSBbXTtcblx0XHRcdGRhdGEuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coYmxvYik7XG5cdFx0XHRcdGltYWdlcy5wdXNoKGJsb2IudmVjdG9yRHJhd2luZyk7XG5cdFx0XHRcdGluZm8ucHVzaCh7XG5cdFx0XHRcdFx0aWQ6ICdkJyArIGluZm8ubGVuZ3RoLFxuXHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lLFxuXHRcdFx0XHRcdHZvdGVzOmRhdGEudm90ZXNbYmxvYi5wbGF5ZXJOYW1lXSB8fCAwXG5cdFx0XHRcdFx0Ly93aW5zOmJsb2Iucm91bmRXaW5zIFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjb25zb2xlLmxvZyhpbmZvKTtcblx0XHRcdH0pXG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZW5kZXJJbmZvOiBpbmZvXG5cdFx0XHR9KVxuXG5cdFx0XHR0aGlzLnJlbmRlckRyYXdpbmdzKGltYWdlcylcblxuXHRcdH0uYmluZCh0aGlzKSlcblxuICBcdC8vIGxpc3RlbiB0byBzd2l0Y2ggdG8gcmVhZHlWaWV3XG4gIFx0c29ja2V0Lm9uKCdyZWFkeVZpZXcnLCBmdW5jdGlvbiAoKSB7IFxuICBcdCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZWFkeScgXG4gIFx0fSk7XG5cbiAgfVxuXG4gIGdvQWdhaW4oKSB7XG4gIFx0c29ja2V0LmVtaXQoJ2FnYWluJyk7XG4gIH1cblxuXG5cblx0cmVuZGVyRHJhd2luZ3MoYXJyKXtcblx0XHQvLyBhcnIuZm9yRWFjaChmdW5jdGlvbihwaWMpIHtcblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHR2YXIgaW1hZ2VEYXRhID0gW107XG5cdFx0XHR2YXIgY291bnQgPSAtMTtcblx0XHRcdGFyci5mb3JFYWNoKGZ1bmN0aW9uKHBpYykge1xuXG5cdFx0XHQvLyBjYW52YXMubG9hZEZyb21KU09OKGpzb24sIGNhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpLCBmdW5jdGlvbigpIHtcblx0XHRcdC8vICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdC8vICAgICB2YXIgZHJhd2luZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuXHRcdFx0Ly8gICAgIGltYWdlLnNyYyA9IGRyYXdpbmdzLnRvRGF0YVVybChcImltYWdlL3BuZ1wiKTtcblx0XHRcdC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm90ZScpLmFwcGVuZENoaWxkKGltYWdlKTtcblx0XHRcdC8vIH0pO1xuXG5cdFx0XHQgIFx0Y2FudmFzLmxvYWRGcm9tSlNPTiggcGljLCBmdW5jdGlvbigpIHtcblx0XHRcdCAgXHRcdC8vIGNhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpXG5cdFx0XHQgIFx0XHQvLyB2YXIgYmxvYiA9IEpTT04ucGFyc2UoanNvbik7XG5cdFx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0ICBcdFx0aW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcblx0XHRcdCAgXHRcdGNvdW50Kys7XG5cdFx0XHQgIFx0XHR2YXIgaWQgPSAnZCcgKyBjb3VudDtcblx0XHRcdCAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cdFx0XHQgIFx0XHRjYW52YXMuY2xlYXIoKTtcblxuXHRcdFx0ICBcdFx0Ly9wbGFjZSBpbWFnZSBvbiBjYW52YXMvcGFnZSBhcHByb3ByaWF0ZWx5XG5cdFx0XHQgIFx0fSk7XG5cdFx0XHQvL2NhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpXG5cdFx0Ly8gfSlcblx0XHRcdFx0XG5cdFx0XHR9KVxuXHRcdFx0Ly8gdmFyIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm90ZVwiKTtcblx0XHRcdC8vIHZhciBjaGlsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdFwiKTtcblx0XHRcdC8vIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG5cblxuXHR9O1xuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwidm90ZVwiPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5yZW5kZXJJbmZvLm1hcCgoZGF0YSkgPT4gXG5cdFx0XHRcdFx0PFBsYXllciBpZD17ZGF0YS5pZH0gbmFtZSA9IHtkYXRhLm5hbWV9IHZvdGVzPXtkYXRhLnZvdGVzfS8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5nb0FnYWlufT5QbGF5IGFnYWluPzwvYnV0dG9uPlxuXG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufSJdfQ==