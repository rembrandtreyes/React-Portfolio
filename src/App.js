import React from 'react'
import { Header } from './containers/Header'
import { ProfileContainer } from './containers/ProfileContainer'
import { Portfolio }  from './containers/Portfolio'
import { About } from './containers/About'
import { Footer } from './containers/Footer'

export const App = () => (
  <div>
    <Header />
    <ProfileContainer />
    <Portfolio />
    <About />
    <Footer />
  </div>
)
