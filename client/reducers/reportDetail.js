function reportDetail (state = null, action){
  switch (action.type){
    case 'SET_SCORE_TRANSFER':
      // return action.currentScore
      return [
        {
          previousScore: action.previousScore,
          currentScore: action.currentScore,
          highName: action.highName
        }
      ]
    default:
      return state
  }
}

export default reportDetail