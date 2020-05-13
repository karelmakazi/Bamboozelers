import React from 'react'
import { Route } from 'react-router-dom'

//Component Imports
import Home from './Home'
import Quiz from './Quiz'


const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/Quiz' component={Quiz} />
    </div>
  )
}

export default App