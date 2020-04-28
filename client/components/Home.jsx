import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {setQuizDetails} from '../actions'


function eventHandler(dispatch){
  let selectedCat = event.target.value
  console.log(selectedCat)
  dispatch (setQuizDetails(selectedCat))
}

function Home (props) {
  const {dispatch} = props

  return (
    <div className="homeWrapper">
      <h1>BAMBOOZLE</h1>
      <div className="buttonWrapper">
        <p>Select a category</p>
        <div className="buttons">
          <Link to='/Quiz'><button className='categoryAnimals' value='animals' 
            onClick={() => eventHandler(dispatch)}> Animals </button>
          </Link>
          <Link to='/Quiz'><button className='categoryFilms' value='films' 
            onClick={() => eventHandler(dispatch)}> Films </button>
          </Link>
          <Link to='/Quiz'><button className='categoryMythology' value='mythology' 
            onClick={() => eventHandler(dispatch)}> Mythology </button>
          </Link>
          <Link to='/Quiz'><button className='categoryHistory' value='history' 
            onClick={() => eventHandler(dispatch)}> History </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default connect () (Home)
