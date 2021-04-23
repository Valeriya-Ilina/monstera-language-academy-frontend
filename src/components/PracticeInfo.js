import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


class PracticeInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <div className="mb-2">
          <Button onClick={() => this.props.setPage('flashcard')} variant="secondary" size="lg">
            Knowledge check
          </Button>
        </div>
    )
  }
}

export default PracticeInfo;
