import React from 'react'
import Header from './Header'

const logo = require('../../src/images/Logo@2x.png')
// Stateless component for the profile container
const ProfileContainer = () => (
  <div className="contains">
    <Header className="test" />
    <img className="pix" src={logo} alt="Rembrandt's self-portrait" />
  </div>
)

export default ProfileContainer
