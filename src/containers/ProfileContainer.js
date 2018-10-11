import React from 'react'
import NavPages from '../components/nav-bar/NavPages'
import NavSocial from '../components/nav-bar/NavSocial'

const logo = require('../../src/images/Logo@2x.png')
// Stateless component for the profile container
const ProfileContainer = () => (
  <div className="contains">
    <div className="header-container">
      <NavPages className="header-nav" />
      <NavSocial />
    </div>
    <img className="logo" src={logo} alt="Rembrandt's Logo" />
  </div>
)

export default ProfileContainer
