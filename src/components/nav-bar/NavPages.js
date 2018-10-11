import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';


const navArr = [
  <ul>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </ul>,
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
  </ul>,
]

const NavPages = ({ className }) => (
  <div className={className}>
    {(window.location.href === 'http://localhost:3000/')
      ? navArr[0]
      : navArr[1]}
  </div>
)

NavPages.propTypes = {
  className: PropTypes.string.isRequired,
}

export default NavPages
