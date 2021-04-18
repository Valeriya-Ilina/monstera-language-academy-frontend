import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ""
    }
    // handleLogout = () => {
    //   //call logout route
    // }
  }

  render() {
    return (
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="#home">Monstera Language Academy</Navbar.Brand>
        <Nav.Item>
          <Nav.Link onClick={this.props.setPage} id='main'>Main</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.props.setPage} id='flashcard'>FlashCard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.props.setPage} id='login'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.props.setPage} id='signup'>SignUp</Nav.Link>
        </Nav.Item>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
