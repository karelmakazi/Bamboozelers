import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

const apiUrl = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean'

class Film extends React.Component {
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
        <h2>Film</h2>
        <h3 style={{backgroundColor: this.state.backgroundColor}}> Your Score: {this.state.score}</h3>
        {
          this.state.results.map((result, index) => {
            return (
              <div key={index} >
                 {result.question} <br />
                  <button value='true' onClick={() => this.quizAnswerHandler}>True</button>
                  <button value='false' onClick={() => this.quizAnswerHandler}>False</button>
              </div>
            )
          })
        }
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Film