import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';

class FlashCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answer: "",
      glossary: [
        {
          translateFrom: 'Hello',
          translateTo: 'Ciao'
        },
        {
          translateFrom: 'Goodbye',
          translateTo: 'Arrivederci'
        },
        {
          translateFrom: 'Hi',
          translateTo: 'Привет'
        },
        {
          translateFrom: 'Привет',
          translateTo: 'Bonjour'
        },
        {
          translateFrom: 'Having fun',
          translateTo: 'Divirtiéndose'
        },
        {
          translateFrom: 'Hello world',
          translateTo: 'Hola Mundo'
        },
        {
          translateFrom: 'What\'s up',
          translateTo: 'Qué pasa'
        }
      ]
    }
  };

  showAnswer = (index) => {
    this.setState({
      //get answer and save to the component state
      answer: this.state.glossary[index].translateTo
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
            //each itteration it returns a carousel item component
            this.state.glossary.map((word, index) => {
              return (
                <Carousel.Item>
                  <h1 id="practice-word" className="d-block">{word.translateFrom}</h1>
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
