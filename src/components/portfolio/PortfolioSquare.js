import React, { Component } from 'react'
import {
  FaHtml5, FaCss3, FaJsSquare,
} from 'react-icons/fa'

const twitchViewer = require('../../../src/images/twitch-viewer.png')
const wikiViewer = require('../../../src/images/wiki-viewer.png')
const localWeather = require('../../../src/images/local-weather.png')
const technicalDocument = require('../../../src/images/technical-document.png')
const tributePage = require('../../../src/images/tribute-page.png')
const surveyForm = require('../../../src/images/survey-form.png')

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
          preview: twitchViewer,
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />],
            },
          ],
        },
        {
          id: this.nextId(),
          title: 'Wiki Viewer',
          url: 'https://codepen.io/rembrandtreyes/full/OjpVyw/',
          preview: wikiViewer,
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />],
            },
          ],
        },
        {
          id: this.nextId(),
          title: 'Local Weather',
          url: 'https://codepen.io/rembrandtreyes/full/qXNBrb/',
          preview: localWeather,
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />],
            },
          ],
        },
        {
          id: this.nextId(),
          title: 'Technical Document',
          url: 'https://codepen.io/rembrandtreyes/full/aKgrGj/',
          preview: technicalDocument,
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />],
            },
          ],
        },
        {
          id: this.nextId(),
          title: 'Tribute Page',
          url: 'https://codepen.io/rembrandtreyes/full/VdOvWp/',
          preview: tributePage,
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />],
            },
          ],
        },
        {
          id: this.nextId(),
          title: 'Survey Form',
          url: 'https://codepen.io/rembrandtreyes/full/QxRyXG/',
          preview: surveyForm,
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />],
            },
          ],
        },
      ],
    }
  }

  /*
  Helper function that will automate incrementing the ID for our portfolio
  square.
  */
  nextId() {
    this.uniqueId = this.uniqueId || 0
    this.uniqueId += 1
    return this.uniqueId
  }

  render() {
    const { portfolioSquare } = this.state
    return (
      <div className="portfolio-square">
        {portfolioSquare.map(square => (
          <div key={square.id}>
            <p className="title">{square.title}</p>
            <img className="preview-tile" alt="thumbnail preview" src={square.preview} />
            <div className="icons" key={square.lang[0].langId}>
              {square.lang[0].icons.map(icon => <span key={this.nextId}>{icon}</span>)}
            </div>
            <a className="button js-button" role="button" rel="noopener noreferrer" target="_blank" href={square.url}>View</a>
          </div>
        ))}
      </div>
    )
  }
}

export default PortfolioSquare
