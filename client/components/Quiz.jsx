import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Question from './Question'
import { addName } from '../api'
import request from 'superagent'

//SCORING

var count = 0

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      results: [],
      backgroundColor: 'white',
      name:'',
      previous: ''
    }

    this.questionResponseHandler = this.questionResponseHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() { 
    const {categorySelected} = this.props

    //QUIZ CONTENT
    const newAPI = this.apiConstructor(categorySelected)
    request.get(newAPI)
      .then(res => {
        const results = res.body.results
        this.setState({
          results: results
        })
      })

    //CATEGORY PREVIOUS ATTEMPT  
    request.get('/api/v1/score')
    .then(res => {
      this.setState({
        previous: res.body[0].previous
      })
    })
  }

  //API CONSTRUCTORS
  apiConstructor(category){
    var number = this.apiNumber(category)
    return 'https://opentdb.com/api.php?amount=10&category=' + number + 
            '&difficulty=easy&type=boolean'
  }

  apiNumber(category){
    switch (category){
      case 'Animals':
        return '27'
      case 'Films':
        return '11'
      case 'Science':
        return '17'
      case 'History':
        return '23'
      default:
        return 'black'
    }
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

   //SCORING
  questionResponseHandler(response, currentScore){
     let nowScore = this.state.score
     let newScore = nowScore + response

     this.setState({
      score: newScore,
    })
     
   }

   //CONDITIONAL FORMATTING
  categoryFormatting(category){
      switch (category){
        case 'Animals':
          return 'orange'
        case 'Films':
          return 'orangered'
        case 'Science':
          return 'cornflowerblue'
        case 'History':
          return 'Purple'
        default:
          return 'black'
      }
   }
   
   render() {
     
    const {categorySelected} = this.props
    const currentScore = this.state.score
    const previousScore = this.state.previous
    const color = this.categoryFormatting(categorySelected)
    const scoreBody = 'Previous Score: ' + previousScore
      
    return (
      <div>
        <div className='scoreIndicator'>
          {scoreBody}
        </div>
        <h2 style={{color: color}}> {categorySelected}</h2>
        <h3 style={{backgroundColor: this.state.backgroundColor}}> Your Score: {currentScore}</h3>

        {
          this.state.results.map((result, index) => {
            return (
              <div key={index}>
                <Question question={result.question} correctAnswer={result.correct_answer} 
                  color={color} id={index} parentHandler={this.questionResponseHandler}/>
              </div>
            )
          })
        }

        <div className='nameEntry'>
          <label htmlFor='userName'>Name: </label>
          <input id='userName' value={this.state.name} name='name' onChange={this.handleChange} />
            <div onClick={this.handleSubmit}>
              <button className='saveName'> Save </button>
            </div>
        </div>
        <Link to='/'>Home</Link>
        <Link to='/Score' oldscore={previousScore} newscore={currentScore}>Proceed</Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    categorySelected: state.quizDetail
  }
}

export default connect(mapStateToProps)(Quiz)