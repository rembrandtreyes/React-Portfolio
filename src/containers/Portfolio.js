import React, { Component } from 'react'
import PortfolioSquare from '../../src/components/portfolio/PortfolioSquare.js'

class Portfolio extends Component {

  render() {
    return (
      <div className="portfolio-container">
        <div id="star"></div>
        <PortfolioSquare />
      </div>
    )
  }
}

export default Portfolio
