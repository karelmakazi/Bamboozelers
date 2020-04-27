function quizDetail (state = null, action){
  switch (action.type){
    case 'SET_QUIZ_DETAIL':
      return action.category
    default:
      return state
  }
}

export default quizDetail