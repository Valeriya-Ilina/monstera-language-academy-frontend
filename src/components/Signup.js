import React, { Component } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { applyBackgroundImage, clearBackgroundImage } from '../utils';


console.log(process.env.NODE_ENV)
let baseUrl = ''

// more on React environment variables
// https://create-react-app.dev/docs/adding-custom-environment-variables/
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3060'
} else {
  baseUrl = 'https://monstera-language-academy-be.herokuapp.com'
}

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      response: '',
    }
  }

  componentDidMount() {
    applyBackgroundImage()
  }

  componentWillUnmount() {
    clearBackgroundImage()
  }

  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })
  }

  signupUser = async (event) => {
    event.preventDefault()

    const url = baseUrl + '/users/signup'
    const signupBody = {
      username: this.state.username,
      password: this.state.password
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupBody),
        credentials: "include" // SENDING COOKIES
      })

      if (response.status === 201) {
        console.log("USER IS CREATED")
        this.setState({
          response: "USER IS CREATED"
        })
        this.props.setPage('login')
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  render() {
    return(
      <div id="signup-container">
        <h1>Signup</h1>
        <Form onSubmit={this.signupUser}>
          <Form.Group controlId="username">
            <Form.Control
              required
              type="text"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button id="signup-btn" variant="primary" type="submit">
            Create User
          </Button>
        </Form>
        <p>{this.state.response}</p>
      </div>
    )
  }
}

export default Signup;
