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
        <Link to='#'><button className='categoryAnimals' value='Animals' 
          onClick={() => eventHandler(dispatch)}> Animals </button>
        </Link>
        <Link to='#'><button className='categoryFilms' value='Films' 
          onClick={() => eventHandler(dispatch)}> Films </button>
        </Link>
        <Link to='#'><button className='categoryMythology' value='Mythology' 
          onClick={() => eventHandler(dispatch)}> Mythology </button>
        </Link>
        <Link to='#'><button className='categoryHistory' value='History' 
          onClick={() => eventHandler(dispatch)}> History </button>
        </Link>
      </div>





      {/* <Link to='/Films'>
        <button className='categoryFilms'>Films</button>
      </Link>
      </div>  
      <div className="buttons">
      <Link to='/Computers'>
        <button className='categoryComputers'>Computers</button>
      </Link>
      <Link to='/History'>
        <button className='categoryHistory'>History</button>
      </Link> */}
      
      </div>
    </div>
  )
}

export default connect () (Home)

// export default class Home extends React.Component {
//   render() {
    // return (
    //   <div className="homeWrapper">
    //     <h1>BAMBOOZLE</h1>
    //     <div className="buttonWrapper">
    //       <p>Select a category</p>
    //     <div className="buttons">
    //     <Link to=''>
    //       <button className='categoryAnimals' value='Animals' onClick={() => eventHandler(event)}>
    //         Animals
    //       </button>
    //     </Link>
    //     {/* <Link to='/Films'>
    //       <button className='categoryFilms'>Films</button>
    //     </Link>
    //     </div>  
    //     <div className="buttons">
    //     <Link to='/Computers'>
    //       <button className='categoryComputers'>Computers</button>
    //     </Link>
    //     <Link to='/History'>
    //       <button className='categoryHistory'>History</button>
    //     </Link> */}
    //     </div>
    //     </div>
    //   </div>
    // )
//   }
// }