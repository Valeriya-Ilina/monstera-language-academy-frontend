import React, { Component } from 'react'
import { Accordion, Card, Table, Container, Col, Row, Button } from 'react-bootstrap'

class WordDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey}>
            <Container>
              <Row>
                <Col sm>{this.props.translateFrom}</Col>
                <Col sm>{this.props.translateTo}</Col>
                <Col sm><Button variant="primary" size="sm">
                    DELETE </Button>{' '}</Col>
              </Row>
            </Container>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey={this.props.eventKey}>
            <Card.Body>
              <div>Verb</div>
              <div>Sound</div>
              <div>Examples</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    )
  }
}

export default WordDetails;
