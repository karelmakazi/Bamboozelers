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
    let {categorySelected, currentScore, previousScore, highName} = this.props
    let scoreFeedback = (currentScore > previousScore) ? 'You beat ' + highName + "'s highscore!" : highName + "'s highscore still stands!"
    

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
    highName: state.reportDetail[0].highName
  }
}

export default connect(mapStateToProps)(ScoreReport)