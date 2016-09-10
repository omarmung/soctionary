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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSUEsc0JBQ0U7QUFBQTtBQUFBLElBQVEsaUNBQVI7QUFDRSxzREFBTyxNQUFLLEdBQVosRUFBZ0IseUJBQWhCLEdBREY7QUFFRSxzREFBTyxNQUFLLFFBQVosRUFBcUIsMEJBQXJCLEdBRkY7QUFHRSxzREFBTyxNQUFLLFVBQVosRUFBdUIsNEJBQXZCLEdBSEY7QUFJRSxzREFBTyxNQUFLLE9BQVosRUFBb0IseUJBQXBCLEdBSkY7QUFLRSxzREFBTyxNQUFLLFNBQVosRUFBc0IsMkJBQXRCO0FBTEYsQ0FERixFQVFHLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQVJIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgaGFzaEhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgTmFtZSBmcm9tICcuL25hbWUuanN4J1xuaW1wb3J0IFJlYWR5IGZyb20gJy4vdmlld3MvcmVhZHkuanN4J1xuaW1wb3J0IERyYXdpbmcgZnJvbSAnLi92aWV3cy9kcmF3aW5nLmpzeCdcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi92aWV3cy9yZXN1bHQuanN4J1xuaW1wb3J0IFZvdGUgZnJvbSAnLi92aWV3cy92b3RlLmpzeCdcblxuXG4gXG5yZW5kZXIoKFxuICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e05hbWV9Lz5cbiAgICA8Um91dGUgcGF0aD1cIi9yZWFkeVwiIGNvbXBvbmVudD17UmVhZHl9Lz5cbiAgICA8Um91dGUgcGF0aD1cIi9kcmF3aW5nXCIgY29tcG9uZW50PXtEcmF3aW5nfS8+XG4gICAgPFJvdXRlIHBhdGg9XCIvdm90ZVwiIGNvbXBvbmVudD17Vm90ZX0vPlxuICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc3VsdFwiIGNvbXBvbmVudD17UmVzdWx0fS8+XG4gIDwvUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdfQ==