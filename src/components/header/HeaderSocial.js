import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'

export const HeaderSocial = () => (
  <div className="header-social">
    <ul>
      <li />
      <li><a href="https://rembrandtreyes.wordpress.com/"><FaWordpress /></a></li>
      <li><a href="https://twitter.com/rembrandt_reyes"><FaTwitter /></a></li>
      <li><a href="https://github.com/rembrandtreyes"><FaGithub /></a></li>
      <li><a href="https://www.linkedin.com/in/rembrandtreyes/"><FaLinkedin /></a></li>
    </ul>
  </div>
)
