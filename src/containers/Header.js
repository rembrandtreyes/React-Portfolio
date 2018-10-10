import React from 'react'
import { HeaderNav } from '../components/header/HeaderNav'
import { HeaderSocial } from '../components/header/HeaderSocial'

// Stateless header comonent
export const Header = () => (
  <div className="header-container">
    <HeaderNav />
    <HeaderSocial />
  </div>
)
