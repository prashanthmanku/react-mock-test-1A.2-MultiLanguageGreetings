import {Component} from 'react'
import GreetingButton from './components/GreetingButton'

import {
  AppContainer,
  WidthContainer,
  MainHeading,
  ButtonListContainer,
  Img,
} from './styledComponents'
import './App.css'

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
  state = {
    activeLanguage: languageGreetingsList[0],
  }

  changeLanguage = activeLanguage => {
    this.setState({
      activeLanguage,
    })
  }

  render() {
    const {activeLanguage} = this.state
    const {imageUrl, imageAltText, id} = activeLanguage
    return (
      <AppContainer>
        <WidthContainer>
          <MainHeading>Multilingual Greetings</MainHeading>
          <ButtonListContainer>
            {languageGreetingsList.map(each => (
              <GreetingButton
                buttonDetails={each}
                key={each.id}
                activeId={id}
                changeLanguage={this.changeLanguage}
              />
            ))}
          </ButtonListContainer>
          <Img src={imageUrl} alt={imageAltText} />
        </WidthContainer>
      </AppContainer>
    )
  }
}

export default App
