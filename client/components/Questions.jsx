import React from 'react'
import { Link } from 'react-router-dom'

class Questions extends React.Component {
 
  quizAnswerHandler(answer) {
    let count = 0
    if (answer === this.props.correct_answer) {
      count++
    }
    
    resultHandler(count) 
  }

  render() {
    const question = this.props.question
    return (
      <div className="questionWrapper">
        {question}
        <br />
        <button onClick={() => quizAnswerHandler()}>True</button>
        <button onClick={() => quizAnswerHandler()}>False</button>

      </div>
    );
  }
}

export default Questions;