import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {setQuizDetails} from '../actions'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
      }

    this.eventHandler = this.eventHandler.bind(this)
  }

    eventHandler(dispatch){
    let selectedCat = event.target.value
    dispatch (setQuizDetails(selectedCat))
    }

  render() {
    
    const {dispatch} = this.props

    return (
      <div className="homeWrapper">
      <h1>BAMBOOZLE</h1>
      <div className="buttonWrapper">
        <div>Select a category</div>
        <div className="buttons">
          <Link to='/Quiz'><button className='categoryAnimals' value='Animals' 
            onClick={() => this.eventHandler(dispatch)}> Animals </button>
          </Link>
          <Link to='/Quiz'><button className='categoryFilms' value='Films' 
            onClick={() => this.eventHandler(dispatch)}> Films </button>
          </Link>
          <Link to='/Quiz'><button className='categoryScience' value='Science' 
            onClick={() => this.eventHandler(dispatch)}> Science </button>
          </Link>
          <Link to='/Quiz'><button className='categoryHistory' value='History' 
            onClick={() => this.eventHandler(dispatch)}> History </button>
          </Link>
        </div>
      </div>
      <div className='nameInput'>
        <label htmlFor='userName'>Name: </label>
        <input id='userName' name='userName'/>
      </div>
    </div>
    )
  
}}

export default connect () (Home)