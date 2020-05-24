function reportDetail (state = null, action){
  switch (action.type){
    case 'SET_SCORE_TRANSFER':
      // return action.currentScore
      return [
        {
          previousScore: action.previousScore,
          currentScore: action.currentScore
        }
      ]
    default:
      return state
  }
}

export default reportDetail