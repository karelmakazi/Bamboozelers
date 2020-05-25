export const setQuizDetails = (category) => {
  return {
    type: 'SET_QUIZ_DETAIL',
    category: category
  }
}

export const setScoreTransfer = (scoreCarrier) => {

  return {
    type: 'SET_SCORE_TRANSFER',
    previousScore: scoreCarrier.previousScore,
    currentScore: scoreCarrier.currentScore,
    highName: scoreCarrier.highName
  }
}