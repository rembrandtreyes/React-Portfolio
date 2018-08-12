import React from 'react'
import { render } from 'react-dom'
import { Header } from '../src/components/header/Header'

window.React = React
render(
  <Header />,
  document.getElementById('container')
)
