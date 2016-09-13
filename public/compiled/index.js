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

//BIG NOTE:  We only used react router to setup routes.  We move from view to view using window.location.href


(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _name2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/ready', component: _ready2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/drawing', component: _drawing2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/vote', component: _vote2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/result', component: _result2.default })
), document.getElementById('app'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBVkE7OztBQWNBLHNCQUNFO0FBQUE7QUFBQSxJQUFRLGlDQUFSO0FBQ0Usc0RBQU8sTUFBSyxHQUFaLEVBQWdCLHlCQUFoQixHQURGO0FBRUUsc0RBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQixHQUZGO0FBR0Usc0RBQU8sTUFBSyxVQUFaLEVBQXVCLDRCQUF2QixHQUhGO0FBSUUsc0RBQU8sTUFBSyxPQUFaLEVBQW9CLHlCQUFwQixHQUpGO0FBS0Usc0RBQU8sTUFBSyxTQUFaLEVBQXNCLDJCQUF0QjtBQUxGLENBREYsRUFRRyxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FSSCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy9CSUcgTk9URTogIFdlIG9ubHkgdXNlZCByZWFjdCByb3V0ZXIgdG8gc2V0dXAgcm91dGVzLiAgV2UgbW92ZSBmcm9tIHZpZXcgdG8gdmlldyB1c2luZyB3aW5kb3cubG9jYXRpb24uaHJlZlxuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IE5hbWUgZnJvbSAnLi9uYW1lLmpzeCdcbmltcG9ydCBSZWFkeSBmcm9tICcuL3ZpZXdzL3JlYWR5LmpzeCdcbmltcG9ydCBEcmF3aW5nIGZyb20gJy4vdmlld3MvZHJhd2luZy5qc3gnXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vdmlld3MvcmVzdWx0LmpzeCdcbmltcG9ydCBWb3RlIGZyb20gJy4vdmlld3Mvdm90ZS5qc3gnXG5cblxuIFxucmVuZGVyKChcbiAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtOYW1lfS8+XG4gICAgPFJvdXRlIHBhdGg9XCIvcmVhZHlcIiBjb21wb25lbnQ9e1JlYWR5fS8+XG4gICAgPFJvdXRlIHBhdGg9XCIvZHJhd2luZ1wiIGNvbXBvbmVudD17RHJhd2luZ30vPlxuICAgIDxSb3V0ZSBwYXRoPVwiL3ZvdGVcIiBjb21wb25lbnQ9e1ZvdGV9Lz5cbiAgICA8Um91dGUgcGF0aD1cIi9yZXN1bHRcIiBjb21wb25lbnQ9e1Jlc3VsdH0vPlxuICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXX0=