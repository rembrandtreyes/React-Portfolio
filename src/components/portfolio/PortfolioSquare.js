import React, { Component } from 'react'
import {
  FaHtml5, FaCss3, FaJsSquare,
} from 'react-icons/fa'

const twitchViewer = require('../../../src/images/twitch-viewer@2x.png')
const markdownPreviewer = require('../../../src/images/markdown-previewer@2x.png')
const wikiViewer = require('../../../src/images/wiki-viewer@2x.png')
const localWeather = require('../../../src/images/local-weather@2x.png')
const randomQuotes = require('../../../src/images/random-quote@2x.png')
const technicalDocument = require('../../../src/images/technical-document@2x.png')

class PortfolioSquare extends Component {
  constructor(props) {
    super(props)

    // Data for portfolio squares
    this.state = {
      portfolioSquare: [
        {
          id: this.nextId(),
          title: 'Markdown Previewer',
          url: 'http://www.markdownpreviewer.com.s3-website.us-east-2.amazonaws.com/',
          preview: markdownPreviewer,
          lang: [
            {
              langId: this.nextId(),
              icons: [<FaHtml5 />, <FaCss3 />, <FaJsSquare />],
            },
          ],
        },
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
          title: 'Random Quotes',
          url: 'https://codepen.io/rembrandtreyes/full/vzrzVp/',
          preview: randomQuotes,
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
