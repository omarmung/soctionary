'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _name = require('./name.jsx');

var _name2 = _interopRequireDefault(_name);

var _ready = require('./views/ready.jsx');

var _ready2 = _interopRequireDefault(_ready);

var _drawing = require('./views/drawing.jsx');

var _drawing2 = _interopRequireDefault(_drawing);

var _result = require('./views/result.jsx');

var _result2 = _interopRequireDefault(_result);

var _vote = require('./views/vote.jsx');

var _vote2 = _interopRequireDefault(_vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _name2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/ready', component: _ready2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/drawing', component: _drawing2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/vote', component: _vote2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/result', component: _result2.default })
), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUEsc0JBQ0U7QUFBQTtBQUFBLElBQVEsaUNBQVI7QUFDRSxzREFBTyxNQUFLLEdBQVosRUFBZ0IseUJBQWhCLEdBREY7QUFFRSxzREFBTyxNQUFLLFFBQVosRUFBcUIsMEJBQXJCLEdBRkY7QUFHRSxzREFBTyxNQUFLLFVBQVosRUFBdUIsNEJBQXZCLEdBSEY7QUFJRSxzREFBTyxNQUFLLE9BQVosRUFBb0IseUJBQXBCLEdBSkY7QUFLRSxzREFBTyxNQUFLLFNBQVosRUFBc0IsMkJBQXRCO0FBTEYsQ0FERixFQVFHQSxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBUkgiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBOYW1lIGZyb20gJy4vbmFtZS5qc3gnXG5pbXBvcnQgUmVhZHkgZnJvbSAnLi92aWV3cy9yZWFkeS5qc3gnXG5pbXBvcnQgRHJhd2luZyBmcm9tICcuL3ZpZXdzL2RyYXdpbmcuanN4J1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3ZpZXdzL3Jlc3VsdC5qc3gnXG5pbXBvcnQgVm90ZSBmcm9tICcuL3ZpZXdzL3ZvdGUuanN4J1xuXG5cbiBcbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TmFtZX0vPlxuICAgIDxSb3V0ZSBwYXRoPVwiL3JlYWR5XCIgY29tcG9uZW50PXtSZWFkeX0vPlxuICAgIDxSb3V0ZSBwYXRoPVwiL2RyYXdpbmdcIiBjb21wb25lbnQ9e0RyYXdpbmd9Lz5cbiAgICA8Um91dGUgcGF0aD1cIi92b3RlXCIgY29tcG9uZW50PXtWb3RlfS8+XG4gICAgPFJvdXRlIHBhdGg9XCIvcmVzdWx0XCIgY29tcG9uZW50PXtSZXN1bHR9Lz5cbiAgPC9Sb3V0ZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIl19