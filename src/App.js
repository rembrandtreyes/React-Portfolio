import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ProfileContainer from './containers/ProfileContainer'
import Portfolio from './containers/Portfolio'
import About from './containers/About'
import Footer from './containers/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/"
            component={ProfileContainer}
            exact
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/portfolio"
            component={Portfolio}
          />
          <Route
            path="/contact"
            component={Footer}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
