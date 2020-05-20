import React from 'react'
import { Route } from 'react-router-dom'

//Component Imports
import Home from './Home'
import Quiz from './Quiz'
import ScoreReport from './ScoreReport'


const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/Quiz' component={Quiz} />
      <Route exact path='/Score' component={ScoreReport} />

    </div>
  )
}

export default App