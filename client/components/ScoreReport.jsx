import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addName } from '../api'
import { Link } from 'react-router-dom'

class ScoreReport extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //EVENT HANDLERS
  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
     })
   }

   handleSubmit(event){
    event.preventDefault()
    addName(this.state)
  }


  render() {
    let {categorySelected, currentScore, previousScore, highName} = this.props
    let scoreFeedback = (currentScore > previousScore) ? 'You beat ' + highName + "'s highscore!" : highName + "'s highscore still stands!"
    

    return (
      <>
        <div>
          <h1>SCORE: {categorySelected}</h1>
          {scoreFeedback}
          <h3>Your Score: {currentScore} High Score: {previousScore}</h3>
        </div>
        <div className='nameEntry'>
            <label htmlFor='userName'>Name: </label>
            <input id='userName' value={this.state.name} name='name' onChange={this.handleChange} />
              <div onClick={this.handleSubmit}>
                <button className='saveName'> Save </button>
              </div>
          </div>
      </>
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