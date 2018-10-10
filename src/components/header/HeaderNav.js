import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => (
  <div className="header-nav">
    <ul>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/portfolio">Portfolio</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </div>
)
