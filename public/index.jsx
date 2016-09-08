import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Name from './name.jsx'
import Ready from './views/ready.jsx'
import Drawing from './views/drawing.jsx'
import Result from './views/result.jsx'
import Vote from './views/vote.jsx'


render((
  <Router history={hashHistory}>
    <Route path="/" component={Name}/>
    <Route path="/ready" component={Ready}/>
    <Route path="/drawing" component={Drawing}/>
    <Route path="/vote" component={Vote}/>
    <Route path="/result" component={Result}/>
  </Router>
), document.getElementById('app'))