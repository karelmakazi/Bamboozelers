import React from 'react'
import { Link } from 'react-router-dom'
import Questions from './Questions'
import request from 'superagent'

const apiUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy'

class Computers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      results: []
    }
  }

  componentDidMount() {
    request.get(apiUrl)
      .then(res => {
        const results = res.body.results
        console.log('results: ', res.body.results)
        this.setState({
          results: results
        })
      })
  }

  // resultHandler(count) {
  //   this.state.score += count
  //   console.log(this.state.score)
  // }

  render() {
    return (
      <div className="wrapper">
        <h1>Computers</h1>
        <h2>True or False?</h2>
        {this.state.results.map((result, index) => {
          return (
            <div key={index} className="questionWrapper">
              {result.question} 
              <br/>
                <button value='true' onClick={() => this.quizAnswerHandler}>True</button>
                <button value='false' onClick={() => this.quizAnswerHandler}>False</button>
            </div>
          ) 
        })
      }
      <Link to='/'>Home</Link>
      </div>
    );
  }     
}



export default Computers