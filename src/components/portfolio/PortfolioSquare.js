import React, { Component } from 'react'

class PortfolioSquare extends Component {
  constructor(props) {
    super(props)

    this.state = {
      portfolioSquare: [
        {
          id: 1,
          title: 'Landing Page',
          url: 'https://codepen.io/rembrandtreyes/pen/NBqYvK'
        },
        {
          id: 2,
          title: 'Technical Document',
          url: 'https://codepen.io/rembrandtreyes/pen/aKgrGj'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.portfolioSquare.map(square => {
          return ([<div>
            <p key={square.id}>{square.title}</p>
            <a key={square.id} href={square.url}>Link</a>
          </div>
          ]

          )
        })}
      </div>
    )
  }
}

export default PortfolioSquare
