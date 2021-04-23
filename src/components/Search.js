import { Component } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'


console.log(process.env.NODE_ENV)
let baseUrl = ''

// more on React environment variables
// https://create-react-app.dev/docs/adding-custom-environment-variables/
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3060'
} else {
  baseUrl = 'heroku url here'
}


class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: baseUrl + "/search",
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

    // using fetch send POST request to BE with body
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
        },
        credentials: "include" // SENDING COOKIES
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

  saveToGlossary = () => {
    const url = baseUrl + '/glossary/'
    const object = {
      text: this.state.translationData.text ,
      translatedText: this.state.translationData.translatedText,
      translateFromLang: this.state.translationData.translateFromLang,
      translateToLang: this.state.translationData.translateToLang
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
      credentials: "include" // SENDING COOKIES
    })
      .then(response => {
          return response.json()
      })
      .then(json => {
        this.props.glossary.push(json)
        this.props.handleGlossaryChange(this.props.glossary)
      },
        err => console.log(err))
  }


  render() {
    console.log(this.state)
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="translateFrom">
          <Form.Label>Translate From</Form.Label>
            <Form.Control as="select" size="sm" onChange={this.handleChange} custom>
              <option value="af">Afrikaans</option>
              <option value="sq">Albanian</option>
              <option value="ar">Arabic</option>
              <option value="hy">Armenian</option>
              <option value="ca">Catalan</option>
              <option value="zh">Chinese</option>
              <option value="hr">Croatian</option>
              <option value="cs">Czech</option>
              <option value="da">Danish</option>
              <option value="nl">Dutch</option>
              <option value="en" selected>English</option>
              <option value="en-au">English (Australia)</option>
              <option value="en-uk">English (United Kingdom)</option>
              <option value="en-us">English (United States)</option>
              <option value="eo">Esperanto</option>
              <option value="fi">Finnish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="el">Greek</option>
              <option value="ht">Haitian Creole</option>
              <option value="hi">Hindi</option>
              <option value="hu">Hungarian</option>
              <option value="is">Icelandic</option>
              <option value="id">Indonesian</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="la">Latin</option>
              <option value="lv">Latvian</option>
              <option value="mk">Macedonian</option>
              <option value="no">Norwegian</option>
              <option value="pl">Polish</option>
              <option value="pt">Portuguese</option>
              <option value="pt-br">Portuguese (Brazil)</option>
              <option value="ro">Romanian</option>
              <option value="ru">Russian</option>
              <option value="sr">Serbian</option>
              <option value="sk">Slovak</option>
              <option value="es">Spanish</option>
              <option value="es-es">Spanish (Spain)</option>
              <option value="es-us">Spanish (United States)</option>
              <option value="sw">Swahili</option>
              <option value="sv">Swedish</option>
              <option value="ta">Tamil</option>
              <option value="th">Thai</option>
              <option value="tr">Turkish</option>
              <option value="vi">Vietnamese</option>
              <option value="cy">Welsh</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="translateTo">
          <Form.Label>Translate To</Form.Label>
            <Form.Control as="select" size="sm" onChange={this.handleChange} custom>
              <option value="af">Afrikaans</option>
              <option value="sq">Albanian</option>
              <option value="ar">Arabic</option>
              <option value="hy">Armenian</option>
              <option value="ca">Catalan</option>
              <option value="zh">Chinese</option>
              <option value="hr">Croatian</option>
              <option value="cs">Czech</option>
              <option value="da">Danish</option>
              <option value="nl">Dutch</option>
              <option value="en">English</option>
              <option value="en-au">English (Australia)</option>
              <option value="en-uk">English (United Kingdom)</option>
              <option value="en-us">English (United States)</option>
              <option value="eo">Esperanto</option>
              <option value="fi">Finnish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="el">Greek</option>
              <option value="ht">Haitian Creole</option>
              <option value="hi">Hindi</option>
              <option value="hu">Hungarian</option>
              <option value="is">Icelandic</option>
              <option value="id">Indonesian</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="la">Latin</option>
              <option value="lv">Latvian</option>
              <option value="mk">Macedonian</option>
              <option value="no">Norwegian</option>
              <option value="pl">Polish</option>
              <option value="pt">Portuguese</option>
              <option value="pt-br">Portuguese (Brazil)</option>
              <option value="ro">Romanian</option>
              <option selected value="ru">Russian</option>
              <option value="sr">Serbian</option>
              <option value="sk">Slovak</option>
              <option value="es">Spanish</option>
              <option value="es-es">Spanish (Spain)</option>
              <option value="es-us">Spanish (United States)</option>
              <option value="sw">Swahili</option>
              <option value="sv">Swedish</option>
              <option value="ta">Tamil</option>
              <option value="th">Thai</option>
              <option value="tr">Turkish</option>
              <option value="vi">Vietnamese</option>
              <option value="cy">Welsh</option>
            </Form.Control>
          </Form.Group>

          <InputGroup className="mb-3">
            <FormControl
              id="searchWordText"
              maxlength = "50"
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
          <Button variant="primary" size="sm" onClick={()=>this.saveToGlossary()}>Save to list of words</Button>{' '}
        </div>
      </>

    )
  }
}

export default Search;
