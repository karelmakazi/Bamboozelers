import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <h1>BAMBOOZLE</h1>

        <Link to='/Animals'>
          <button className='categoryAnimals'>Animals</button>
        </Link>
        <Link to='/Films'>
          <button className='categoryFilms'>Films</button>
        </Link>
        <Link to='/Computers'>
          <button className='categoryComputers'>Computers</button>
        </Link>
        <Link to='/History'>
          <button className='categoryHistory'>History</button>
        </Link>
      </>
    )
  }
}