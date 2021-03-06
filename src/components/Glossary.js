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
  baseUrl = 'https://monstera-language-academy-be.herokuapp.com'
}

class Glossary extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getGlossary()
  }

  getGlossary = () => {
    // fetch glossary words from the backend
    fetch(baseUrl + "/glossary", {
      credentials: "include", // SENDING COOKIES
    })
    .then(res => { return res.json()
    }).then(data => {
        // update glossary in higher component App
        this.props.handleGlossaryChange(data)
     })
  }

  deleteWord = async (id) => {
    const url = baseUrl + '/glossary/' + id

    try{
      const response = await fetch( url, {
        method: 'DELETE',
        credentials: "include" // SENDING COOKIES
      })

      if (response.status === 200){

        const findIndex = this.props.glossary.findIndex(word => word._id === id)
        const copyGlossary = [...this.props.glossary]
        copyGlossary.splice(findIndex, 1)

        // update glossary in higher component App
        this.props.handleGlossaryChange(copyGlossary)
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
        credentials: "include" // SENDING COOKIES
      })

      if (response.status === 200){
        const updatedWord = await response.json()
        const findIndex = this.props.glossary.findIndex(word => word._id === updatedWord.data._id)
        const copyGlossary = [...this.props.glossary]
        copyGlossary[findIndex].favorite = updatedWord.data.favorite

        // update glossary in higher component App
        this.props.handleGlossaryChange(copyGlossary)
      }
    }
    catch(err){
      console.log('Error => ', err);
    }
  }


  render() {
    return(
      <>
        <Table borderless size="sm" id="table">
        <h4>List of Saved Words</h4>
        <p classname='right-align'>* double-click to add to favorites</p>
          <tbody>
            <tr>
              <td>
                <Accordion>
                  {
                    this.props.glossary.length
                    ? this.props.glossary.map((word, index) => {
                      return (
                        // pass the whole word object via props
                        <WordDetails word={word} eventKey={index+1} deleteWord={this.deleteWord} toggleFavorite={this.toggleFavorite}/>
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
