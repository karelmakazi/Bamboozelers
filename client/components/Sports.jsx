import React from 'react'
import { Link } from 'react-router-dom'
import Questions from './Questions'

class Sports extends React.Component {
  render() {
    return (
      <div>
        <h1>Sports</h1>
        <Questions />
        <Link to='/'>Home</Link>
      </div>
    );
  }
}



export default Sports