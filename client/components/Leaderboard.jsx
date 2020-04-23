import React from 'react'
import { Link } from 'react-router-dom'

class Leaderboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Leaderboard</h2>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}

export default Leaderboard