import { Component } from 'react'
import { Table, Button, Accordion } from 'react-bootstrap'
import WordDetails from './WordDetails'


console.log(process.env.NODE_ENV)
let baseUrl = ''

// more on React environment variables
// https://create-react-app.dev/docs/adding-custom-environment-variables/
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3060'
} else {
  baseUrl = 'heroku url here'
}

class Glossary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      glossary: []
    }
  }

  componentDidMount() {
    this.getGlossary()
  }

  getGlossary = () => {
    // fetch glossary words from the backend
    fetch(baseUrl + "/glossary")
    .then(res => { return res.json()
    }).then(data => {
      this.setState({
        glossary: data,
      })
     })
  }

  deleteWord = async (id) => {
    const url = baseUrl + '/glossary/' + id

    try{
      const response = await fetch( url, {
        method: 'DELETE'
      })

      if (response.status === 200){

        const findIndex = this.state.glossary.findIndex(word => word._id === id)
        const copyGlossary = [...this.state.glossary]
        copyGlossary.splice(findIndex, 1)

        this.setState({
          glossary: copyGlossary
        })
      }
    }
    catch(err){
      console.log('Error => ', err);
    }
  }


  toggleFavorite = async (word) => {
    const url = baseUrl + '/glossary/' + word._id + '/addToFavorites'

    try{

      const response = await fetch(url , {
        method: 'PATCH',
      })

      if (response.status === 200){
        const updatedWord = await response.json()
        const findIndex = this.state.glossary.findIndex(word => word._id === updatedWord.data._id)
        const copyGlossary = [...this.state.glossary]
        copyGlossary[findIndex].favorite = updatedWord.data.favorite

        this.setState({
          glossary: copyGlossary
        })
      }
    }
    catch(err){
      console.log('Error => ', err);
    }

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
                  {
                    this.state.glossary.length
                    ? this.state.glossary.map((word, index) => {
                      return (
                        // pass the whole word object via props
                        <WordDetails word={word} eventKey={index} deleteWord={this.deleteWord} toggleFavorite={this.toggleFavorite}/>
                      )
                    })
                    : ''
                  }

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
