import React, { Component } from 'react'
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'

console.log(process.env.NODE_ENV)
let baseUrl = ''

// more on React environment variables
// https://create-react-app.dev/docs/adding-custom-environment-variables/
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3060'
} else {
  baseUrl = 'heroku url here'
}

export default class Header extends Component {
  constructor(props) {
    super(props)

  }

  logoutUser = async (event) => {
    const url = baseUrl + '/users/logout'
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        credentials: "include" // SENDING COOKIES
      })

      if (response.status === 200) {
        console.log("USER IS LOGGED OUT")
        this.props.setUsername('')
        this.props.setPage('login')
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  render() {
    return (
      <Navbar bg="light" expand="sm">
        <Navbar.Brand>
          <Nav.Link onClick={() => this.props.setPage('main')} id='main'>Monstera Language Academy</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {
              this.props.username
              ? <div>
                  Signed in as: {this.props.username}
                  <button onClick={this.logoutUser}>Logout</button>
                </div>
              :
              <Nav className="justify-content-end">
                <Nav.Link onClick={() => this.props.setPage('login')} id='login'>Login</Nav.Link>
                <Nav.Link onClick={() => this.props.setPage('signup')} id='signup'>SignUp</Nav.Link>
              </Nav>

            }

          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
