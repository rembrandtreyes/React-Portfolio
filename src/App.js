import React from 'react'
import { Header } from './containers/Header'
import { ProfileContainer } from './containers/ProfileContainer'
import Portfolio  from './containers/Portfolio'

export const App = () => (
  <div>
    <Header />
    <ProfileContainer />
    <Portfolio />
  </div>
)
