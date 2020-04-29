import React from 'react'


class Question extends React.Component {
  
  quizAnswerHandler(answer) {
    let responseValue = event.target.value
    let resCode = (responseValue === answer) ? 1 : 0
    // console.log('Answer: ' + answer + ' Response: ' + responseValue + ' Your code: ' + resCode);
    this.props.parentHandler(resCode)
  }

  render() {
    const question = this.props.question
    const answer = this.props.correctAnswer
    const number = 'Q' + (this.props.id + 1) + '. '
    const color = this.props.color
   
    return (
      <div className='questionContainer'>
        <div className='questionBody'>
          <span style={{color: color}}>{number}</span> {question}
        </div>
        <div className='questionAnswers'>
          <button value={'True'} onClick={() => this.quizAnswerHandler(answer)}>True</button>
          <button value={'False'} onClick={() => this.quizAnswerHandler(answer)}>False</button>
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