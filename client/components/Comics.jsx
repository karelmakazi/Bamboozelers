import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Questions from './Questions'

class Comics extends Component {
  render() {
    return (
      <div>
        <h1>Comics</h1>
        <Questions />
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default Comics;