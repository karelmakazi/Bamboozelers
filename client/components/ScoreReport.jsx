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
    

    return (
      <div>
        <h1>SCORE: {categorySelected}</h1>
        <h2>Your score was: {currentScore} </h2>
        <h2>Old score was: {previousScore} </h2>
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