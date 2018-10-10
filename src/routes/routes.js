import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Header } from './src/containers/Header'
import { Profile } from './src/containers/Profile'

export const Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Header} />
    <Route path="/" component={Profile}>
      <Route path="about" component={About} />

      <Route path="members" component={MemberList} />
    </Route>
    <Route path="*" component={Whoops404} />
  </Router>
)
