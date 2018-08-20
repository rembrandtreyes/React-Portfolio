import React, { Component } from 'react'
import PortfolioSquare from '../../src/components/portfolio/PortfolioSquare.js'

class Portfolio extends Component {

  render() {
    return (
      <div id="portfolio" className="portfolio-container">
        <PortfolioSquare />
      </div>
    )
  }
}

export default Portfolio
