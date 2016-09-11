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
	return _react2.default.createElement(
		'div',
		{ id: props.id, value: props.name, onClick: function onClick() {
				return props.voting(props.id);
			} },
		_react2.default.createElement('img', { src: props.image })
	);
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
				var canvas = new fabric.Canvas('test');
				//var images = [];
				data.images.forEach(function (blob) {
					//images.push(blob.vectorDrawing);
					canvas.loadFromJSON(blob.vectorDrawing, function () {

						var image = canvas.toDataURL({
							format: 'image/png',
							multiplier: 0.25,
							width: 375,
							height: 375
						});
						info.push({
							id: 'd' + info.length,
							name: blob.playerName,
							image: image
						});
						canvas.clear();
					});
				});

				this.setState({
					renderInfo: info
				});

				// redirect to voting view
				// images is an array of JSON.stringify(canvas) objects to vote on
				//this.renderDrawings(images);

			}.bind(this));

			socket.on('countVotes', function () {
				//Emit name voted on to server.
				socket.emit('vote', this.getVotedName());
				socket.removeListener('countVotes');
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
		key: 'render',
		value: function render() {
			var _this2 = this;

			//Need to decide if we use one big canvas, or just render images of all the drawings
			return _react2.default.createElement(
				'div',
				{ id: 'vote' },
				this.state.renderInfo.map(function (data) {
					return _react2.default.createElement(Select, { id: data.id, name: data.name, voting: _this2.voting.bind(_this2), image: data.image });
				})
			);
		}
	}]);

	return Vote;
}(_react2.default.Component);

exports.default = Vote;
//# sourceMappingURL=data:application/json;base64,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QUFMLENBQVksSUFBWixRQUFoRCxFQUF3RSxPQUFPLEtBQUssS0FBcEYsR0FEMEI7QUFBQSxLQUExQjtBQURGLElBREQ7QUFXQTs7OztFQTNGZ0MsZ0JBQU0sUzs7a0JBQW5CLEkiLCJmaWxlIjoidm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy9zaG93IHByb21wdCBmb3IgdGhpbmdcbnZhciBTZWxlY3QgPSAocHJvcHMpID0+IChcblx0PGRpdiBpZD17cHJvcHMuaWR9IHZhbHVlPXtwcm9wcy5uYW1lfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy52b3RpbmcocHJvcHMuaWQpfT5cblx0XHQ8aW1nIHNyYz17cHJvcHMuaW1hZ2V9Lz5cblx0PC9kaXY+XG5cdClcblxuLy92b3RlZCBpcyB0aGUgaWQgdGFnIGZvciB0aGUgY3VycmVudCB2b3RlZCBkcmF3aW5nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZvdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRyZW5kZXJJbmZvOiBbXVxuXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdHZhciBpbmZvID0gW107XG5cdFx0c29ja2V0Lm9uKCd2b3RlJywgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdC8vdGltZSBmb3IgY291bnRkb3duXG5cdFx0XHR2YXIgdGltZSA9IGRhdGEudGltZTtcblx0XHRcdHZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygndGVzdCcpXG5cdFx0XHQvL3ZhciBpbWFnZXMgPSBbXTtcblx0XHRcdGRhdGEuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdFx0Ly9pbWFnZXMucHVzaChibG9iLnZlY3RvckRyYXdpbmcpO1xuXHRcdFx0ICBcdGNhbnZhcy5sb2FkRnJvbUpTT04oIGJsb2IudmVjdG9yRHJhd2luZywgZnVuY3Rpb24oKSB7XG5cblxuXHRcdFx0ICBcdFx0dmFyIGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCh7XG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdFx0XHRcdG11bHRpcGxpZXI6IDAuMjUsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzNzUsXG5cdFx0XHRcdFx0XHQgIGhlaWdodDogMzc1XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRpbmZvLnB1c2goe1xuXHRcdFx0XHRcdFx0aWQ6ICdkJyArIGluZm8ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bmFtZTpibG9iLnBsYXllck5hbWUsIFxuXHRcdFx0XHRcdFx0aW1hZ2U6IGltYWdlXG5cdFx0XHRcdFx0fSlcblx0XHRcdCAgXHRcdGNhbnZhcy5jbGVhcigpO1xuXHRcdFx0ICBcdH0pXG5cdFx0XHR9KVxuIFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHJlbmRlckluZm86IGluZm9cblx0XHRcdH0pXG5cblx0XHQgIC8vIHJlZGlyZWN0IHRvIHZvdGluZyB2aWV3XG5cdFx0ICAvLyBpbWFnZXMgaXMgYW4gYXJyYXkgb2YgSlNPTi5zdHJpbmdpZnkoY2FudmFzKSBvYmplY3RzIHRvIHZvdGUgb25cblx0XHQgIC8vdGhpcy5yZW5kZXJEcmF3aW5ncyhpbWFnZXMpO1xuXG5cblxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHRzb2NrZXQub24oJ2NvdW50Vm90ZXMnLCBmdW5jdGlvbigpICB7XG5cdFx0XHQvL0VtaXQgbmFtZSB2b3RlZCBvbiB0byBzZXJ2ZXIuXG5cdFx0XHRzb2NrZXQuZW1pdCgndm90ZScsIHRoaXMuZ2V0Vm90ZWROYW1lKCkpXG5cdFx0XHRzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2NvdW50Vm90ZXMnKVxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9yZXN1bHQnIFxuXHRcdH0uYmluZCh0aGlzKSlcblxuXG5cdH0gXG5cblxuXG5cdGdldFZvdGVkTmFtZSgpIHtcblxuXHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdKSB7XG5cdCAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2b3RlZCcpWzBdLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHR9IGVsc2Uge1xuICAgICByZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXG5cdHZvdGluZyhpZCkge1xuXHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0pIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZvdGVkJylbMF0uY2xhc3NMaXN0LnJlbW92ZShcInZvdGVkXCIpXG5cdFx0fVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc05hbWUgKz0gXCJ2b3RlZFwiXG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHQvL05lZWQgdG8gZGVjaWRlIGlmIHdlIHVzZSBvbmUgYmlnIGNhbnZhcywgb3IganVzdCByZW5kZXIgaW1hZ2VzIG9mIGFsbCB0aGUgZHJhd2luZ3Ncblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInZvdGVcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucmVuZGVySW5mby5tYXAoKGRhdGEpID0+IFxuXHRcdFx0XHRcdDxTZWxlY3QgaWQ9e2RhdGEuaWR9IG5hbWUgPSB7ZGF0YS5uYW1lfSB2b3Rpbmc9e3RoaXMudm90aW5nLmJpbmQodGhpcyl9IGltYWdlPXtkYXRhLmltYWdlfS8+XG5cdFx0XHRcdCl9XG5cblx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0KVxuXHR9XG59Il19