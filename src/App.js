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
      page: 'login',
      glossary: [],
      username: ''
    };
  }

  setUsername = (username) => {
    this.setState({
      username: username
    })
  }

  handleGlossaryChange = (glossaryArray) => {
    this.setState({
      glossary: glossaryArray
    })
  }

  setPage = (pageName) => {
    this.setState({
      page: pageName
    });
  };

  render() {
    let page;
    if(this.state.page === 'main' && this.state.username) {
      page = <Main glossary={this.state.glossary} handleGlossaryChange={this.handleGlossaryChange} setPage={this.setPage}/>
    }
    else if(this.state.page === 'flashcard') {
      page = <FlashCard />
    }
    else if(this.state.page === 'signup') {
      page = <Signup setUsername={this.setUsername} setPage={this.setPage}/>
    }
    else {
      page = <Login setUsername={this.setUsername} setPage={this.setPage}/>
    }

    return (
      <div className="App">
        <Header setPage={this.setPage} username={this.state.username} setUsername={this.setUsername}/>
        <main>
          {page}
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
