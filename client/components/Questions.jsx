import React from 'react'
import { Link } from 'react-router-dom'
import resultHandler from './Animals'

class Questions extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      correct_answer: this.props.correct_answer,
      score: 0
    }
  }

  quizAnswerHandler(event) {
    let count = 0
    let answer = event.target.value
    
    if (answer === 'true') {
        count = 1
    } else {
      count= 0
    }
    
    this.setState = {
      score: count
    }
    // resultHandler(count)
  }

  render() {
    const question = this.props.question
    return (
      <div className="questionWrapper">
        <h2>Score: {this.state.score}</h2>
        {question}
        <br />
        <button value='true' onClick={() => this.quizAnswerHandler}>True</button>
        <button value='false' onClick={() => this.quizAnswerHandler}>False</button>

      </div>
    );
  }
}

export default Questions;