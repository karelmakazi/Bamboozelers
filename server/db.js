const connection = require('./connections')

module.exports = {
  addName,
  getScore
}

//POST NEW NAME TO DB
function addName(newName, db = connection){

    return db('leaderboard')
  .insert({
    name: newName,
    category: 'test',
    score: 13   
  })
}

//GET PREVIOUS SCORE
function getScore (db = connection) {
  return db('leaderboard')
  .select('score as previous')
  .where({category: 'Animals'})
  .then(results => {  
    return (results)
    })
}
