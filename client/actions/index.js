export const setQuizDetails = (category) => {
  return {
    type: 'SET_QUIZ_DETAIL',
    category: category
  }
}

export const setScoreTransfer = (scoreCarrier) => {

  console.log(scoreCarrier);
  
  return {
    type: 'SET_SCORE_TRANSFER',
    previousScore: scoreCarrier.previousScore,
    currentScore: scoreCarrier.currentScore
  }
}