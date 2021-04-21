import { Component } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: "http://localhost:3060/search",
      searchWordText: "",
      translateFrom: "en",
      translateTo: "ru",
      translationData: {}
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    // TODO set default values in the dropdown
    console.log(this.state.translateFrom)
    console.log(this.state.translateTo)
    console.log(this.state.searchWordText)

    const url = this.state.baseURL
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          translateTo: this.state.translateTo,
          text: this.state.searchWordText
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      let body = await response.json()
      if (response.status === 200) {
        this.setState({
          translationData: body
        })
      }
    }
    catch(err){
      console.log('Error => ', err);
    }
  }

  render() {
    console.log(this.state)
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="translateFrom">
          <Form.Label>Translate From</Form.Label>
            <Form.Control as="select" size="sm" onChange={this.handleChange} custom>
              <option selected>en</option>
              <option>ru</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="translateTo">
          <Form.Label>Translate To</Form.Label>
            <Form.Control as="select" size="sm" onChange={this.handleChange} custom>
              <option>en</option>
              <option selected>ru</option>
            </Form.Control>
          </Form.Group>

          <InputGroup className="mb-3">
            <FormControl
              id="searchWordText"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={this.state.searchWordText}
              onChange={this.handleChange}
            />
            <Button type="submit" className="mb-2">
              Search
            </Button>
          </InputGroup>
        </Form>

        <div>
          <h3>Text: {this.state.translationData.text} </h3>
          <h3>Translated from language: {this.state.translationData.translateFromLang} </h3>
          <h3>Translated to language: {this.state.translationData.translateToLang} </h3>
          <h3>Translated text: {this.state.translationData.translatedText} </h3>
        </div>
      </>

    )
  }
}

export default Search;
