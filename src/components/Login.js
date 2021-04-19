import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: 'http://localhost:3060/sessions',
      username: '',
      password: '',
      response: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      username: this.state.username,
      password: this.state.password
    }

    fetch(this.state.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
          return response.json()
      })
      .then(json => this.setState({
          repsonse: json.data,
          username: '',
          password: ''
        }),
        err => console.log(err))
  }

  render() {
    console.log(this.state)
    return(
      <div id="login-container">
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
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
      </div>
    )
  }
}

export default Login;
