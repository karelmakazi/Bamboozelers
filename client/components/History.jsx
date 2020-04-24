import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Questions from './Questions'
import request from 'superagent'

const apiUrl = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean'


class History extends Component {
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
      <div>
        <h1>True or False?</h1>
        <h2>History</h2>
        {/* <h3>Your Score: {this.state.count}</h3> */}
        {
          this.state.results.map((result, index) => {
            return (
              <div key={index} >
                 {result.question}
                  <br />
                  <button value='true' onClick={() => this.quizAnswerHandler}>True</button>
                  <button value='false' onClick={() => this.quizAnswerHandler}>False</button>
              </div>
            )
          })
        }
        <Link to='/'>Home</Link>
      </div >
    )
  }
}

export default History;