import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {setQuizDetails} from '../actions'


function eventHandler(dispatch){
  let selectedCat = event.target.value
  dispatch (setQuizDetails(selectedCat))
}

function Home (props) {
  const {dispatch} = props

  return (
    <div className="homeWrapper">
      <h1>BAMBOOZLE</h1>
      <div className="buttonWrapper">
        <div>Select a category</div>
        <div className="buttons">
          <Link to='/Quiz'><button className='categoryAnimals' value='Animals' 
            onClick={() => eventHandler(dispatch)}> Animals </button>
          </Link>
          <Link to='/Quiz'><button className='categoryFilms' value='Films' 
            onClick={() => eventHandler(dispatch)}> Films </button>
          </Link>
          <Link to='/Quiz'><button className='categoryScience' value='Science' 
            onClick={() => eventHandler(dispatch)}> Science </button>
          </Link>
          <Link to='/Quiz'><button className='categoryHistory' value='History' 
            onClick={() => eventHandler(dispatch)}> History </button>
          </Link>
        </div>
      </div>
      <div className='nameInput'>
        <label htmlFor='userName'>Name: </label>
        <input id='userName' name='userName'/>
      </div>

    </div>
  )
}

export default connect () (Home)
