import React from 'react'
import {
  FaLinkedin, FaGithub, FaTwitter, FaWordpress,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavSocial = () => (
  <div className="header-social">
    <ul>
      <li><NavLink to="https://rembrandtreyes.wordpress.com/"><FaWordpress /></NavLink></li>
      <li><NavLink to="https://twitter.com/rembrandt_reyes"><FaTwitter /></NavLink></li>
      <li><NavLink to="https://github.com/rembrandtreyes"><FaGithub /></NavLink></li>
      <li><NavLink to="https://www.linkedin.com/in/rembrandtreyes/"><FaLinkedin /></NavLink></li>
    </ul>
  </div>
)

export default NavSocial
