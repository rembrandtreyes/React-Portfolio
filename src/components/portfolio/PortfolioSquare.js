import React, { Component } from 'react'
import { FaHtml5 } from 'react-icons/fa'

class PortfolioSquare extends Component {
  constructor(props) {
    super(props)

    this.state = {
      portfolioSquare: [
        {
          id: this.nextId(),
          title: 'Wiki-Viewer',
          url: 'https://codepen.io/rembrandtreyes/full/OjpVyw/',
          preview: require('../../../src/images/wiki-viewer.png'),
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />]
            }
          ]
        },
        {
          id: this.nextId(),
          title: 'Technical Document',
          url: 'https://codepen.io/rembrandtreyes/pen/aKgrGj',
          preview: require('../../../src/images/technical-document.png'),
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />]
            }
          ]

        }
      ]
    }
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  render() {
    return (
      <div className="portfolio-square">
        {this.state.portfolioSquare.map(square => {
          return ([
            <div key={square.id}>
            <p className="title">{square.title}</p>
            <img className="preview-width" src={square.preview} />
            <div key={square.lang[0].langId}>
              {square.lang[0].icons.map((icon, index) => {return <span key={index}>{icon}</span>})}
            </div>
            <a href={square.url}>Link</a>
          </div>
          ])
        })}
      </div>
    )
  }
}

export default PortfolioSquare
