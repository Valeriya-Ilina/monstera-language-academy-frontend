import { Component } from 'react'
import Search from './Search'
import Glossary from './Glossary'
import PracticeInfo from './PracticeInfo'
import FlashCard from './FlashCard'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <>
        <div id="search-container">
          <Search glossary={this.props.glossary} handleGlossaryChange={this.props.handleGlossaryChange} />
        </div>
        <div id="learn-container">
          <Glossary glossary={this.props.glossary} handleGlossaryChange={this.props.handleGlossaryChange}/>
          <PracticeInfo />
        </div>
      </>
    )
  }
}

export default Main;
