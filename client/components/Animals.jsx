import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'


const apiUrl = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean'

class Animals extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      results: [],
      backgroundColor: 'white'
    }
  }

  

  componentDidMount() {
    request.get(apiUrl)
      .then(res => {
        const results = res.body.results
        console.log('results: ', res.body.results)
        this.setState({
          results: results
        })
      })
  }


  quizAnswerHandler(answer) {
    let response = event.target.value
    let startScore = this.state.score
    
    var buttonColor
    
    if (response === answer) {
      startScore ++
      buttonColor = "green"
    } else {
      buttonColor = "red"
      }
      
    this.setState({
      score: startScore,
      backgroundColor: buttonColor
    })
   }

  

  render() {

    return (
      <div>
        <h1>True or False?</h1>
        <h2>Animals</h2>
         <h3 style={{backgroundColor: this.state.backgroundColor}}> Your Score: {this.state.score}</h3>
        {
          this.state.results.map((result, index) => {
            return (
              <div key={index} >
                 {result.question} <br />

                  <button 
                    value='True' 
                    onClick={()=> this.quizAnswerHandler(result.correct_answer)}>True
                  </button>
                
                  <button value='False' onClick={() => this.quizAnswerHandler(result.correct_answer)}>False</button>
              </div>
            )
          })
        }
        <Link to='/'>Home</Link>
      </div >
    )
  }
}

export default Animals