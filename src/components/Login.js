import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseUrl: 'http://localhost:3060',
      username: '',
      password: '',
      authenticationResult: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })
  }

  loggingUser = async (event) => {
    event.preventDefault()

    const url = this.state.baseUrl + '/users/login'
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
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p>{this.state.authenticationResult}</p>
      </div>
    )
  }
}

export default Login;
