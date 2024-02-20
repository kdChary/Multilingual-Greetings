import {Component} from 'react'

import './App.css'
import Tabitem from './Tabitem'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {greetingId: languageGreetingsList[0].id}

  tabClicked = tabId => {
    this.setState({greetingId: tabId})
    console.log('clicked')
  }

  render() {
    const {greetingId} = this.state
    const greetingsObj = languageGreetingsList.find(
      each => each.id === greetingId,
    )
    const {imageUrl} = greetingsObj
    const {imageAltText} = greetingsObj

    return (
      <div className="app-container">
        <h1 className="title">Multilingual Greetings</h1>
        <div className="app-card">
          <ul className="tab-item-list">
            {languageGreetingsList.map(language => (
              <Tabitem
                key={language.id}
                tabClicked={this.tabClicked}
                buttonDetails={language}
                isActive={greetingId === language.id}
              />
            ))}
          </ul>
          <img src={imageUrl} alt={imageAltText} className="greetings-image" />
        </div>
      </div>
    )
  }
}

export default App
