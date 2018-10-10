import React from 'react'
import { Profile } from '../components/profile/Profile.js'
import { Header } from './Header'

// Stateless component for the profile container
export const ProfileContainer = () => (
  <div>
    <Header className="test" />
    <img className="pix" src={require('../../src/images/logo@2x.png')} alt="Rembrandt's self-portrait" />
    <Profile />
  </div>

)
