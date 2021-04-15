import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ""
    }
    handleLogout = () => {
      //call logout route
    }
  }

  render() {
    return (
      <nav>
        //code
      </nav>
    )
  }
}
