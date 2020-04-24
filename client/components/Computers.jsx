import React from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

const apiUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy'

class Computers extends React.Component {
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
        <h1>Computers</h1>
        <h2>True or False?</h2>
        {this.state.results.map((result, index) => {
          return (
            <div key={index} >
              {result.question} 
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


export default Computers