import React from 'react'

class Question extends React.Component {
  
  feedback = ''
  feedbackColour ='white'

  quizAnswerHandler(answer) {
    let responseValue = event.target.value
    let resCode = (responseValue === answer) ? 1 : 0
    this.feedback = (resCode === 1) ? 'CORRECT' : 'WRONG'
    this.feedbackColour = (resCode === 1) ? 'green' : 'violet'
    this.props.parentHandler(resCode)
  }

  render() {
    const question = this.props.question
    const answer = this.props.correctAnswer
    const number = 'Q' + (this.props.id + 1) + '. '
    const color = this.props.color
    let resultIndicator = this.feedback
   
    return (
      <div className='questionContainer'>
        <div className='questionBody'>
          <span style={{color: color}}>{number}</span> {question}
        </div>
        <div className='questionAnswers'>
          <button value={'True'} onClick={() => this.quizAnswerHandler(answer)}>True</button>
          <button value={'False'} onClick={() => this.quizAnswerHandler(answer)}>False</button>
        </div>
        <div className='resultIndicator' style={{color:this.feedbackColour}}>
          {resultIndicator}
        </div>
      </div>
    )
  }
}


export default Question
