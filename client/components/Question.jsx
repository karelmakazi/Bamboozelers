import React from 'react'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answered: 0,
    }
  }
  
  feedback = ''
  feedbackColour ='white'
  resCode = 3

  // quizAnswerHandler(answer) {
  //   let responseValue = event.target.value
  //   let resCode = (responseValue === answer) ? 1 : 0
  //   this.feedback = (resCode === 1) ? 'CORRECT' : 'WRONG'
  //   this.feedbackColour = (resCode === 1) ? 'green' : 'violet'
  //   this.props.parentHandler(resCode)
  // }

  quizAnswerHandler(answer) {
    if (this.state.answered === 0) {
      let responseValue = event.target.value
      let resCode = (responseValue === answer) ? 1 : 0
      this.feedback = (resCode === 1) ? 'CORRECT' : 'WRONG'
      this.feedbackColour = (resCode === 1) ? 'green' : 'violet'
      this.props.parentHandler(resCode)
      this.setState({ answered: 1 })
    } else {
      console.log('already answered that')
      }
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
