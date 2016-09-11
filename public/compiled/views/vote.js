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
	return _react2.default.createElement('div', { id: props.id, value: props.name, onClick: function onClick() {
			return props.voting(props.id);
		} });
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
				console.log('data', data);
				var images = [];
				data.images.forEach(function (blob) {
					images.push(blob.vectorDrawing);
					info.push({
						id: 'd' + info.length,
						name: blob.playerName
					});
				});

				this.setState({
					renderInfo: info
				});
				console.log(this.state.renderInfo);

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				this.renderDrawings(images);
			}.bind(this));

			socket.on('countVotes', function () {
				//Emit name voted on to server.
				console.log('name', this.getVotedName());
				socket.emit('vote', this.getVotedName());
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
			var _this2 = this;

			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement(
				'div',
				{ id: 'vote' },
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2) });
				})
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,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QUFFN0Isa0JBQVksSUFGaUI7QUFHN0IsYUFBTyxHQUhzQjtBQUk1QixjQUFRO0FBSm9CLE1BQWpCLENBQVo7QUFNQTtBQUNBLFNBQUksS0FBSyxNQUFNLEtBQWY7QUFDQSxjQUFTLGNBQVQsQ0FBd0IsRUFBeEIsRUFBNEIsV0FBNUIsQ0FBd0MsS0FBeEM7QUFDQSxZQUFPLEtBQVA7O0FBRUE7QUFDQSxLQWpCRDtBQWtCSDtBQUNEO0FBRUUsSUE5QkQ7QUErQkE7QUFDQTtBQUNBO0FBRUQ7OzsyQkFHUTtBQUFBOztBQUNSO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVI7QUFDRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEdBQXRCLENBQTBCLFVBQUMsSUFBRDtBQUFBLFlBQzFCLDhCQUFDLE1BQUQsSUFBUSxJQUFJLEtBQUssRUFBakIsRUFBcUIsTUFBUSxLQUFLLElBQWxDLEVBQXdDLFFBQVEsT0FBSyxNQUFMLENBQVksSUFBWixRQUFoRCxHQUQwQjtBQUFBLEtBQTFCO0FBREYsSUFERDtBQVdBOzs7O0VBNUhnQyxnQkFBTSxTOztrQkFBbkIsSSIsImZpbGUiOiJ2b3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL3Nob3cgcHJvbXB0IGZvciB0aGluZ1xudmFyIFNlbGVjdCA9IChwcm9wcykgPT4gKFxuXHQ8ZGl2IGlkPXtwcm9wcy5pZH0gdmFsdWU9e3Byb3BzLm5hbWV9IG9uQ2xpY2s9eygpID0+IHByb3BzLnZvdGluZyhwcm9wcy5pZCl9PlxuXHQ8L2Rpdj5cblx0KVxuXG4vL3ZvdGVkIGlzIHRoZSBpZCB0YWcgZm9yIHRoZSBjdXJyZW50IHZvdGVkIGRyYXdpbmdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm90ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlbmRlckluZm86IFtdXG5cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0dmFyIGluZm8gPSBbXTtcblx0XHRzb2NrZXQub24oJ3ZvdGUnLCBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0Ly90aW1lIGZvciBjb3VudGRvd25cblx0XHRcdHZhciB0aW1lID0gZGF0YS50aW1lO1xuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEnLGRhdGEpXG5cdFx0XHR2YXIgaW1hZ2VzID0gW107XG5cdFx0XHRkYXRhLmltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbihibG9iKSB7XG5cdFx0XHRcdGltYWdlcy5wdXNoKGJsb2IudmVjdG9yRHJhd2luZyk7XG5cdFx0XHRcdGluZm8ucHVzaCh7XG5cdFx0XHRcdFx0aWQ6ICdkJyArIGluZm8ubGVuZ3RoLFxuXHRcdFx0XHRcdG5hbWU6YmxvYi5wbGF5ZXJOYW1lIFxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0cmVuZGVySW5mbzogaW5mb1xuXHRcdFx0fSlcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucmVuZGVySW5mbylcblxuXHRcdCAgLy8gcmVkaXJlY3QgdG8gdm90aW5nIHZpZXdcblx0XHQgIC8vIGltYWdlcyBpcyBhbiBhcnJheSBvZiBKU09OLnN0cmluZ2lmeShjYW52YXMpIG9iamVjdHMgdG8gdm90ZSBvblxuXHRcdCAgdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpO1xuXG5cblxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRzb2NrZXQub24oJ2NvdW50Vm90ZXMnLCBmdW5jdGlvbigpICB7XG5cdFx0XHQvL0VtaXQgbmFtZSB2b3RlZCBvbiB0byBzZXJ2ZXIuXG5cdFx0XHRjb25zb2xlLmxvZygnbmFtZScsdGhpcy5nZXRWb3RlZE5hbWUoKSk7XG5cdFx0XHRzb2NrZXQuZW1pdCgndm90ZScsIHRoaXMuZ2V0Vm90ZWROYW1lKCkpXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL3Jlc3VsdCcgXG5cdFx0fS5iaW5kKHRoaXMpKVxuXG5cblx0fSBcblxuXG5cblx0Z2V0Vm90ZWROYW1lKCkge1xuXG5cdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0pIHtcblx0ICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXHRcdH0gZWxzZSB7XG4gICAgIHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cblx0dm90aW5nKGlkKSB7XG5cdFx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwidm90ZWRcIilcblx0XHR9XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTmFtZSArPSBcInZvdGVkXCJcblx0fVxuXG5cdHJlbmRlckRyYXdpbmdzKGFycil7XG5cdFx0Ly8gYXJyLmZvckVhY2goZnVuY3Rpb24ocGljKSB7XG5cblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHR2YXIgaW1hZ2VEYXRhID0gW107XG5cdFx0XHR2YXIgY291bnQgPSAtMTtcblx0XHRcdGFyci5mb3JFYWNoKGZ1bmN0aW9uKHBpYykge1xuXG5cdFx0XHQvLyBjYW52YXMubG9hZEZyb21KU09OKGpzb24sIGNhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpLCBmdW5jdGlvbigpIHtcblx0XHRcdC8vICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdC8vICAgICB2YXIgZHJhd2luZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuXHRcdFx0Ly8gICAgIGltYWdlLnNyYyA9IGRyYXdpbmdzLnRvRGF0YVVybChcImltYWdlL3BuZ1wiKTtcblx0XHRcdC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm90ZScpLmFwcGVuZENoaWxkKGltYWdlKTtcblx0XHRcdC8vIH0pO1xuXG5cdFx0XHQgIFx0Y2FudmFzLmxvYWRGcm9tSlNPTiggcGljLCBmdW5jdGlvbigpIHtcblx0XHRcdCAgXHRcdC8vIGNhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpXG5cdFx0XHQgIFx0XHQvLyB2YXIgYmxvYiA9IEpTT04ucGFyc2UoanNvbik7XG5cdFx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0ICBcdFx0aW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTCh7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdFx0XHRcdG11bHRpcGxpZXI6IDAuMjUsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzNzUsXG5cdFx0XHRcdFx0XHQgIGhlaWdodDogMzc1XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdCAgXHRcdGNvdW50Kys7XG5cdFx0XHQgIFx0XHR2YXIgaWQgPSAnZCcgKyBjb3VudDtcblx0XHRcdCAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cdFx0XHQgIFx0XHRjYW52YXMuY2xlYXIoKTtcblxuXHRcdFx0ICBcdFx0Ly9wbGFjZSBpbWFnZSBvbiBjYW52YXMvcGFnZSBhcHByb3ByaWF0ZWx5XG5cdFx0XHQgIFx0fSk7XG5cdFx0XHQvL2NhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpXG5cdFx0Ly8gfSlcblx0XHRcdFx0XG5cdFx0XHR9KVxuXHRcdFx0Ly8gdmFyIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm90ZVwiKTtcblx0XHRcdC8vIHZhciBjaGlsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdFwiKTtcblx0XHRcdC8vIHBhcmVudC5yZW1vdmVDaGlsZChjaGlsZCk7XG5cblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdC8vTmVlZCB0byBkZWNpZGUgaWYgd2UgdXNlIG9uZSBiaWcgY2FudmFzLCBvciBqdXN0IHJlbmRlciBpbWFnZXMgb2YgYWxsIHRoZSBkcmF3aW5nc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwidm90ZVwiPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5yZW5kZXJJbmZvLm1hcCgoZGF0YSkgPT4gXG5cdFx0XHRcdFx0PFNlbGVjdCBpZD17ZGF0YS5pZH0gbmFtZSA9IHtkYXRhLm5hbWV9IHZvdGluZz17dGhpcy52b3RpbmcuYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQpfVxuXG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdClcblx0fVxufSJdfQ==