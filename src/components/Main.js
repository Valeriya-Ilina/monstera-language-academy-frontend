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
          <Search />
        </div>
        <div id="learn-container">
          <Glossary />
          <PracticeInfo />
        </div>
      </>
    )
  }
}

export default Main;
