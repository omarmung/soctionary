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
		key: 'chooseVote',
		value: function chooseVote() {}
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
			var _this2 = this;

			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement(
				'div',
				{ id: 'vote' },
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2) });
				}),
				_react2.default.createElement('canvas', { id: 'test', width: '1000', height: '400', display: 'none' })
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,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QUF3QyxLQUF4QztBQUNBLFlBQU8sS0FBUDs7QUFFQTtBQUNBLEtBWkQ7QUFhSDtBQUNEO0FBRUUsSUF6QkQ7QUEwQkEsVUFBTyxPQUFQO0FBQ0E7QUFDQTtBQUNBO0FBRUQ7OzsyQkFHUTtBQUFBOztBQUNSO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVI7QUFDRSxTQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEdBQXRCLENBQTBCLFVBQUMsSUFBRDtBQUFBLFlBQzFCLDhCQUFDLE1BQUQsSUFBUSxJQUFJLEtBQUssRUFBakIsRUFBcUIsTUFBUSxLQUFLLElBQWxDLEVBQXdDLFFBQVEsT0FBSyxNQUFMLENBQVksSUFBWixRQUFoRCxHQUQwQjtBQUFBLEtBQTFCLENBREY7QUFJRSw4Q0FBUSxJQUFHLE1BQVgsRUFBa0IsT0FBTSxNQUF4QixFQUErQixRQUFPLEtBQXRDLEVBQTRDLFNBQVEsTUFBcEQ7QUFKRixJQUREO0FBWUE7Ozs7RUE1SGdDLGdCQUFNLFM7O2tCQUFuQixJIiwiZmlsZSI6InZvdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vc2hvdyBwcm9tcHQgZm9yIHRoaW5nXG52YXIgU2VsZWN0ID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgaWQ9e3Byb3BzLmlkfSB2YWx1ZT17cHJvcHMubmFtZX0gb25DbGljaz17KCkgPT4gcHJvcHMudm90aW5nKHByb3BzLmlkKX0+XG5cdDwvZGl2PlxuXHQpXG5cbi8vdm90ZWQgaXMgdGhlIGlkIHRhZyBmb3IgdGhlIGN1cnJlbnQgdm90ZWQgZHJhd2luZ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWb3RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cmVuZGVySW5mbzogW11cblxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHR2YXIgaW5mbyA9IFtdO1xuXHRcdHNvY2tldC5vbigndm90ZScsIGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHQvL3RpbWUgZm9yIGNvdW50ZG93blxuXHRcdFx0dmFyIHRpbWUgPSBkYXRhLnRpbWU7XG5cblx0XHRcdHZhciBpbWFnZXMgPSBbXTtcblx0XHRcdGRhdGEuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdFx0aW1hZ2VzLnB1c2goYmxvYi52ZWN0b3JEcmF3aW5nKTtcblx0XHRcdFx0aW5mby5wdXNoKHtcblx0XHRcdFx0XHRpZDogJ2QnICsgaW5mby5sZW5ndGgsXG5cdFx0XHRcdFx0bmFtZTpibG9iLnBsYXllck5hbWUgXG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRyZW5kZXJJbmZvOiBpbmZvXG5cdFx0XHR9KVxuXG5cblx0XHQgIC8vIHJlZGlyZWN0IHRvIHZvdGluZyB2aWV3XG5cdFx0ICAvLyBpbWFnZXMgaXMgYW4gYXJyYXkgb2YgSlNPTi5zdHJpbmdpZnkoY2FudmFzKSBvYmplY3RzIHRvIHZvdGUgb25cblx0XHQgIHRoaXMucmVuZGVyRHJhd2luZ3MoaW1hZ2VzKTtcblxuXG5cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0c29ja2V0Lm9uKCdjb3VudFZvdGVzJywgZnVuY3Rpb24oKSAge1xuXHRcdFx0Ly9FbWl0IG5hbWUgdm90ZWQgb24gdG8gc2VydmVyLlxuXHRcdFx0Y29uc29sZS5sb2coJ25hbWUnLHRoaXMuZ2V0Vm90ZWROYW1lKCkpO1xuXHRcdFx0c29ja2V0LmVtaXQoJ3ZvdGUnLCB0aGlzLmdldFZvdGVkTmFtZSgpKVxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZXN1bHQnIFxuXHRcdH0uYmluZCh0aGlzKSlcblxuXG5cdH0gXG5cblx0Y2hvb3NlVm90ZSgpe1xuXHQgICBcblx0fVxuXG5cblx0Z2V0Vm90ZWROYW1lKCkge1xuXG5cdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0pIHtcblx0ICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXHRcdH0gZWxzZSB7XG4gICAgIHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cblx0dm90aW5nKGlkKSB7XG5cdFx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndm90ZWQnKVswXS5jbGFzc0xpc3QucmVtb3ZlKFwidm90ZWRcIilcblx0XHR9XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTmFtZSArPSBcInZvdGVkXCJcblx0fVxuXG5cdHJlbmRlckRyYXdpbmdzKGFycil7XG5cdFx0Ly8gYXJyLmZvckVhY2goZnVuY3Rpb24ocGljKSB7XG5cblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHR2YXIgaW1hZ2VEYXRhID0gW107XG5cdFx0XHR2YXIgY291bnQgPSAtMTtcblx0XHRcdGFyci5mb3JFYWNoKGZ1bmN0aW9uKHBpYykge1xuXG5cdFx0XHQvLyBjYW52YXMubG9hZEZyb21KU09OKGpzb24sIGNhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpLCBmdW5jdGlvbigpIHtcblx0XHRcdC8vICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdC8vICAgICB2YXIgZHJhd2luZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdCcpO1xuXHRcdFx0Ly8gICAgIGltYWdlLnNyYyA9IGRyYXdpbmdzLnRvRGF0YVVybChcImltYWdlL3BuZ1wiKTtcblx0XHRcdC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm90ZScpLmFwcGVuZENoaWxkKGltYWdlKTtcblx0XHRcdC8vIH0pO1xuXG5cdFx0XHQgIFx0Y2FudmFzLmxvYWRGcm9tSlNPTiggcGljLCBmdW5jdGlvbigpIHtcblx0XHRcdCAgXHRcdC8vIGNhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpXG5cdFx0XHQgIFx0XHQvLyB2YXIgYmxvYiA9IEpTT04ucGFyc2UoanNvbik7XG5cdFx0XHQgIFx0XHR2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0ICBcdFx0aW1hZ2Uuc3JjID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcblx0XHRcdCAgXHRcdGNvdW50Kys7XG5cdFx0XHQgIFx0XHR2YXIgaWQgPSAnZCcgKyBjb3VudDtcblx0XHRcdCAgXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cdFx0XHQgIFx0XHRjYW52YXMuY2xlYXIoKTtcblxuXHRcdFx0ICBcdFx0Ly9wbGFjZSBpbWFnZSBvbiBjYW52YXMvcGFnZSBhcHByb3ByaWF0ZWx5XG5cdFx0XHQgIFx0fSk7XG5cdFx0XHQvL2NhbnZhcy5yZW5kZXJBbGwuYmluZChjYW52YXMpXG5cdFx0Ly8gfSlcblx0XHRcdFx0XG5cdFx0XHR9KVxuXHRcdFx0Y2FudmFzLmRpc3Bvc2UoKTtcblx0XHRcdC8vIHZhciBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvdGVcIik7XG5cdFx0XHQvLyB2YXIgY2hpbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RcIik7XG5cdFx0XHQvLyBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHQvL05lZWQgdG8gZGVjaWRlIGlmIHdlIHVzZSBvbmUgYmlnIGNhbnZhcywgb3IganVzdCByZW5kZXIgaW1hZ2VzIG9mIGFsbCB0aGUgZHJhd2luZ3Ncblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInZvdGVcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucmVuZGVySW5mby5tYXAoKGRhdGEpID0+IFxuXHRcdFx0XHRcdDxTZWxlY3QgaWQ9e2RhdGEuaWR9IG5hbWUgPSB7ZGF0YS5uYW1lfSB2b3Rpbmc9e3RoaXMudm90aW5nLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Y2FudmFzIGlkPVwidGVzdFwiIHdpZHRoPVwiMTAwMFwiIGhlaWdodD1cIjQwMFwiIGRpc3BsYXk9XCJub25lXCI+PC9jYW52YXM+XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19