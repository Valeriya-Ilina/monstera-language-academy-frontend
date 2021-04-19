import React, { Component } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: 'http://localhost:3060/users',
      username: '',
      password: '',
      response: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })
  }

  handleSubmit = (event) => {

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
    return(
      <div id="signup-container">
        <h1>Signup</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create User
          </Button>
        </Form>
      </div>
    )
  }
}

export default Signup;
