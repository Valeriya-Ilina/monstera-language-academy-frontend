import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
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


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      authenticationResult: ''
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

  loggingUser = async (event) => {
    event.preventDefault()

    const url = baseUrl + '/users/login'
    const loginBody = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginBody),
        credentials: "include" // SENDING COOKIES
      })

      if (response.status === 200) {
        console.log("USER IS AUTHENTICATED")
        this.props.setUsername(this.state.username)
        this.props.setPage('main')
      } else {
        this.setState({
          authenticationResult: "Oops, something went wrong"
        })
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }

  }

  render() {
    console.log(this.state)
    return(
      <div id="login-container">
        <h1>Login</h1>
        <Form onSubmit={this.loggingUser}>
          <Form.Group controlId="username">
            <Form.Control type="text" placeholder="Username" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
          </Form.Group>
          <Button id="login-btn" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p>{this.state.authenticationResult}</p>
      </div>
    )
  }
}

export default Login;
