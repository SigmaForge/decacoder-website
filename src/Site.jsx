import React from 'react'
import { Router, Route, Link } from 'react-router'

import Page from './Page'
import Landing from './Landing'
import Workshops from './workshops/Index'
import Workshop from './workshops/Workshop'


export default (props) => (
  <Page>
    <Router >
      <Route path="/" component={Landing}>
        <Route path="workshops" component={Workshops}/>
        <Route path="workshop/:workshopName" component={Workshop}/>
        {/*<Route path="courses" />*/}
      </Route>
    </Router>
  </Page>
)
