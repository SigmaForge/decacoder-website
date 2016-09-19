import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


import Landing from './Landing'
import Footer from './Footer'
import Workshops from './workshops/Index'
import Workshop from './workshops/Workshop'

hashHistory.push(window.location.hash);

render((
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Landing}>
        <IndexRoute component={Landing} />
        <Route path="/workshops" component={Workshops}/>
        <Route path="/workshop/:workshopName" component={Workshop}/>
        {/*<Route path="courses" />*/}
      </Route>
    </Router>
    <Footer />
  </div>
), document.getElementById("mount"))
