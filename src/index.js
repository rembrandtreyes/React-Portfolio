import React from 'react'
import '../src/stylesheets/index.scss'
import { render } from 'react-dom'
import App from '../src/App.js'

window.React = React
render(
  <App />,
  document.getElementById('container')
)
