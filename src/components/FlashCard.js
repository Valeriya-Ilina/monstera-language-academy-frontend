import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';


console.log(process.env.NODE_ENV)
let baseUrl = ''

// more on React environment variables
// https://create-react-app.dev/docs/adding-custom-environment-variables/
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3060'
} else {
  baseUrl = 'https://monstera-language-academy-be.herokuapp.com'
}

class FlashCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answer: "",
      glossaryPractice: []
    }
  };

  componentDidMount() {
    this.getGlossaryPractice()
  }

  getGlossaryPractice = () => {
    // fetch glossary words for practice game from the backend
    fetch(baseUrl + "/glossary", {
      credentials: "include" // SENDING COOKIES
    })
    .then(res => { return res.json()
    }).then(data => {
      // filter to only favorite words
      const favoriteWords = data.filter(word => word.favorite === true)
      this.setState({
        glossaryPractice: favoriteWords
      })
     })
  }

  showAnswer = (index) => {
    this.setState({
      //get answer and save to the component state
      answer: this.state.glossaryPractice[index].translatedText
    })
  }

 //after sliding a card, removes the answer
  handleSlide = () => {
    this.setState({
      answer: ""
    })
  }

  render() {
    return(
      <div id="practice-container">
        <Carousel id='card-container' interval={null} indicators={false} onSlide={this.handleSlide}>
          {
            //each iteration it returns a carousel item component
            this.state.glossaryPractice.map((word, index) => {
              return (
                <Carousel.Item>
                  <h1 id="practice-word" className="d-block">{word.text}</h1>
                  <h6 className="d-block">Translate to: {word.translateToLang}</h6>
                  <div id="answer-container">
                    <h2> {this.state.answer} </h2>
                  </div>
                  <div className="mb-2">
                    <Button id="show-answer-btn" variant="secondary" size="sm" onClick={()=>this.showAnswer(index)}>Show Answer</Button>
                  </div>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
    );
  };
};

export default FlashCard;
