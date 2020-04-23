import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <h3>BAMBOOZLE</h3>

        <Link to='/Animals'>
          <button className='categoryAnimals'>Animals</button>
        </Link>
        <Link to='/Films'>
          <button className='categoryFilms'>Films</button>
        </Link>
        <Link to='/Sports'>
          <button className='categorySports'>Sports</button>
        </Link>
        <Link to='/Comics'>
          <button className='categoryComics'>Comics</button>
        </Link>
      </>
    )
  }
}