import { Component } from 'react'
import Search from './Search'
import Glossary from './Glossary'
import PracticeInfo from './PracticeInfo'
import Keyboard from './Keyboard'
import FlashCard from './FlashCard'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <main>
        {/*<div id="search-container">
          <Search />
          <Keyboard />
        </div>
        <div id="learn-container">
          <Glossary />
          <PracticeInfo />
        </div>*/}
        <FlashCard />
      </main>
    )
  }
}

export default Main;
