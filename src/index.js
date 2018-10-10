import React from 'react'
import './stylesheets/index.scss'
import { render } from 'react-dom'
import App from './App'

window.React = React
render(
  <App />,
  document.getElementById('container'),
)
