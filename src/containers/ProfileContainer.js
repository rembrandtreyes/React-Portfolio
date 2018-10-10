import React from 'react'
import Profile from '../components/profile/Profile'
import Header from './Header'

const logo = require('../../src/images/Logo@2x.png')
// Stateless component for the profile container
const ProfileContainer = () => (
  <div>
    <Header className="test" />
    <img className="pix" src={logo} alt="Rembrandt's self-portrait" />
    <Profile />
  </div>
)

export default ProfileContainer
