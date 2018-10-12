import React from 'react'
import PortfolioSquare from '../components/portfolio/PortfolioSquare'
import NavPages from '../components/nav-bar/NavPages'

// Stateless portfolio component
const Portfolio = () => (
  <div id="portfolio" className="portfolio-container">
    <NavPages className="header-nav" />
    <PortfolioSquare />
  </div>
)

export default Portfolio
