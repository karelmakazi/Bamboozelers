import React from 'react'
// import { questionResponseHandler } from './Quiz'

var resCode = 0

class Question extends React.Component {
  
  
  quizAnswerHandler(answer) {
    if (answer === this.props.correct_answer) {
      resCode++
      console.log('Question Body: ' + resCode)
      this.props.parentHandler(resCode)
    }
  }

  render() {
    const question = this.props.question
    const number = 'Q' + (this.props.id + 1) + '. '
    const color = this.props.color

    return (
      <div className='questionContainer'>
        <div className='questionBody'>
          <span style={{color: color}}>{number}</span> {question}
        </div>
        <div className='questionAnswers'>
          <button onClick={() => this.quizAnswerHandler()}>True</button>
          <button onClick={() => this.quizAnswerHandler()}>False</button>
        </div>
      </div>
    )
  }
}


export default Question

      // <>
      //   <div>
      // <div className="questionWrapper">
      //   {question}
      //   <br />
      //   <button onClick={() => quizAnswerHandler()}>True</button>
      //   <button onClick={() => quizAnswerHandler()}>False</button>

      //   </div>
      //   <div className="questionWrapper">
      //     <ul>
      //       <li>question 1</li>
      //     </ul>
      //   </div>
      // </>
      // </div>