import './App.css';
import { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import FlashCard from './components/FlashCard'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main',
      glossary: []
    };
  }

  handleGlossaryChange = (glossaryArray) => {
    this.setState({
      glossary: glossaryArray
    })
  }

  setPage = (event)=> {
    this.setState({
      page: event.target.id
    });
  };

  render() {
    let page;
    if(this.state.page === 'main') {
      page = <Main glossary={this.state.glossary} handleGlossaryChange={this.handleGlossaryChange}/>
    }
    else if(this.state.page === 'flashcard') {
      page = <FlashCard />
    }
    else if(this.state.page === 'signup') {
      page = <Signup />
    }
    else {
      page = <Login />
    }

    return (
      <div className="App">
        <Header setPage={this.setPage}/>
        <main>
          {page}
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
