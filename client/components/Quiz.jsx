import React from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const apiUrl = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean'


class Quiz extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      score: 0,
      results: [],
      backgroundColor: 'white'
    }
  }
   
 

  componentDidMount() { 
    const {categorySelected} = this.props
    const newAPI = this.apiConstructor(categorySelected)
         
    request.get(newAPI)
      .then(res => {
        const results = res.body.results
        this.setState({
          results: results
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

  quizAnswerHandler(answer) {
    let response = event.target.value
    let startScore = this.state.score
    
    var buttonColor
    
    if (response === answer) {
      startScore ++
      buttonColor = "green"
    } else {
      buttonColor = "red"
      }
      
    this.setState({
      score: startScore,
      backgroundColor: buttonColor
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
    const color = this.categoryFormatting(categorySelected)
    
    return (
      <div>
        <h2 style={{color: color}}> {categorySelected}</h2>
        <h3 style={{backgroundColor: this.state.backgroundColor}}> Your Score: {this.state.score}</h3>
        {
          this.state.results.map((result, index) => {
            return (
              <div key={index} >
                 {result.question} <br />
                  <button 
                    value='True' 
                    onClick={()=> this.quizAnswerHandler(result.correct_answer)}>True
                  </button>
                  <button 
                    value='False' onClick={() => this.quizAnswerHandler(result.correct_answer)}>False
                  </button>
              </div>
            )
          })
        }
        <Link to='/'>Home</Link>
      </div >
    )
  }
}

function mapStateToProps (state) {
  return {
    categorySelected: state.quizDetail
  }
}

export default connect(mapStateToProps)(Quiz)