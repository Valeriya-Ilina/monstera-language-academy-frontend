import { Component } from 'react'
import { Table, Button, Accordion } from 'react-bootstrap'
import WordDetails from './WordDetails'


class Glossary extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <>
        <Table bordered size="sm" id="table">
        <p>List of Saved Words</p>
          <tbody>
            <tr>
              <td>
                <Accordion>
                  <WordDetails translateFrom='Hello' translateTo='Ciao' eventKey="0"/>
                  <WordDetails translateFrom='Goodbye' translateTo='Arrivederci' eventKey="1"/>
                  <WordDetails translateFrom='Hi' translateTo="Привет" eventKey="2"/>
                  <WordDetails translateFrom='Hello' translateTo='Bonjour' eventKey="3"/>
                  <WordDetails translateFrom='Hi' translateTo='¡Hola!' eventKey="4"/>
                  <WordDetails translateFrom='Having fun' translateTo='Divirtiéndose' eventKey="5"/>
                  <WordDetails translateFrom='Hello world' translateTo='Hola Mundo' eventKey="6"/>
                  <WordDetails translateFrom="What's up" translateTo='Qué pasa' eventKey="7"/>
                </Accordion>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}

export default Glossary;
