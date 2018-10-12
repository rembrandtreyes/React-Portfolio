import React from 'react'
import {
  FaLinkedin, FaGithub, FaTwitter, FaWordpress,
} from 'react-icons/fa'

const NavSocial = () => (
  <div className="footer-social">
    <ul>
      <li><a href="https://rembrandtreyes.wordpress.com/" target="_blank" rel="noopener noreferrer"><FaWordpress /></a></li>
      <li><a href="https://twitter.com/rembrandt_reyes" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
      <li><a href="https://github.com/rembrandtreyes" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
      <li><a href="https://www.linkedin.com/in/rembrandtreyes/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
    </ul>
  </div>
)

export default NavSocial
