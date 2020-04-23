import React from 'react'
import { Link } from 'react-router-dom'
import Questions from './Questions'

class Animals extends React.Component {
  render() {
    return (
      <div>
        <h2>Animals</h2>
        <Questions />
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Animals