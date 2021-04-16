import { Component } from 'react'
import LanguageSelect from './LanguageSelect'
import Search from './Search'
import Glossary from './Glossary'


class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <>
        <LanguageSelect />
        <Search />
        <Glossary />
      </>
    )
  }
}

export default Main;
