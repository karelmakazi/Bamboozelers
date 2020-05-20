import React, { Component } from 'react';

class ScoreReport extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name:'',
    }
  }

  render() {

    let newScore = this.props.newscore
    console.log(newScore);
    

    return (
      <div>
        <h1>SCORE</h1>
        <h2>Your score was: {newScore}</h2>
        <h2>Old score was: {this.props.oldscore}</h2>
      </div>
    );
  }
}

export default ScoreReport;