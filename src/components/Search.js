import { Component } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: "",
      apikey: "",
      query: "",
      searchWordText: "",
      translateFrom: "",
      translateTo: "",
      seacrhURL: '',
      translationData: []
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // TODO set default values in the dropdown
    console.log(this.state.translateFrom)
    console.log(this.state.translateTo)
  }
  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="translateFrom">
        <Form.Label>Translate From</Form.Label>
          <Form.Control as="select" size="sm" onChange={this.handleChange} custom>
            <option selected>English</option>
            <option>Italian</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="translateTo">
        <Form.Label>Translate To</Form.Label>
          <Form.Control as="select" size="sm" onChange={this.handleChange} custom>
            <option>English</option>
            <option selected>Italian</option>
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
            Submit
          </Button>
        </InputGroup>
      </Form>
    )
  }
}

export default Search;
