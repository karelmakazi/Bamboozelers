import React from 'react'
import { Link } from 'react-router-dom'
import Questions from './Questions'

class Film extends React.Component {
  render() {
    return (
      <div>
        <h1>Film</h1>
        <Questions />
        <Link to='/'>Home</Link>

      </div>
    );
  }
}

export default Film