import React, { Component } from 'react'
import { FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa'

class PortfolioSquare extends Component {
  constructor(props) {
    super(props)

    // Data for portfolio squares
    this.state = {
      portfolioSquare: [
        {
          id: this.nextId(),
          title: 'Twitch Viewer',
          url: 'https://codepen.io/rembrandtreyes/full/yPgoQE/',
          preview: require('../../../src/images/twitch-viewer.png'),
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />]
            }
          ]
        },
        {
          id: this.nextId(),
          title: 'Wiki Viewer',
          url: 'https://codepen.io/rembrandtreyes/full/OjpVyw/',
          preview: require('../../../src/images/wiki-viewer.png'),
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />]
            }
          ]
        },
        {
          id: this.nextId(),
          title: 'Local Weather',
          url: 'https://codepen.io/rembrandtreyes/full/qXNBrb/',
          preview: require('../../../src/images/local-weather.png'),
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />]
            }
          ]
        },
        {
          id: this.nextId(),
          title: 'Technical Document',
          url: 'https://codepen.io/rembrandtreyes/full/aKgrGj/',
          preview: require('../../../src/images/technical-document.png'),
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />]
            }
          ]
        },
        {
          id: this.nextId(),
          title: 'Tribute Page',
          url: 'https://codepen.io/rembrandtreyes/full/VdOvWp/',
          preview: require('../../../src/images/tribute-page.png'),
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />]
            }
          ]
        },
        {
          id: this.nextId(),
          title: 'Survey Form',
          url: 'https://codepen.io/rembrandtreyes/full/QxRyXG/',
          preview: require('../../../src/images/survey-form.png'),
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />]
            }
          ]
        }
      ]
    }
  }

  /*
  Helper function that will automate incrementing the ID for our portfolio
  square.
  */
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
              <img className="preview-tile" src={square.preview} />
              <div className="icons" key={square.lang[0].langId}>
                {square.lang[0].icons.map((icon, index) => {return <span key={index}>{icon}</span>})}
              </div>
              <a className="button js-button" role="button" target="_blank" href={square.url}>Link</a>
            </div>
          ])
        })}
      </div>
    )
  }
}

export default PortfolioSquare
