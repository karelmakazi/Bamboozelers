import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ScoreReport extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name:'',
    }
  }

 


  render() {
    let {categorySelected, currentScore, previousScore} = this.props
    let scoreFeedback = (currentScore > previousScore) ? 'You now have the highest score!' : 'You did not beat the highscore!'
    

    return (
      <div>
        <h1>SCORE: {categorySelected}</h1>
        {scoreFeedback}
        <h3>Your Score: {currentScore} High Score: {previousScore}</h3>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    categorySelected: state.quizDetail,
    currentScore: state.reportDetail[0].currentScore,
    previousScore: state.reportDetail[0].previousScore,
  }
}

export default connect(mapStateToProps)(ScoreReport)