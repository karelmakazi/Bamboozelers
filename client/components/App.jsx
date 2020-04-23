import React from 'react'
import { Route } from 'react-router-dom'

//Component Imports
import Animals from './Animals'
import Home from './Home'
import Sports from './Sports'
import Comics from './Comics'
import Films from './Films'
import Leaderboard from './Leaderboard'


const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/Animals' component={Animals} />
      <Route exact path='/Sports' component={Sports} />
      <Route exact path='/Comics' component={Comics} />
      <Route exact path='/Films' component={Films} />
      <Route exact path='/Leaderboard' component={Leaderboard} />
    </div>
  )
}

export default App
