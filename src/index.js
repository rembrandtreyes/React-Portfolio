import React from 'react'
import '../src/stylesheets/index.scss'
import { render } from 'react-dom'
import { Header } from '../src/components/header/Header'

window.React = React
render(
  <Header />,
  document.getElementById('container')
)
