
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('leaderboard').del()
    .then(function () {
      // Inserts seed entries
      return knex('leaderboard').insert([
        { score_id: 1, name: 'Alicia', category: 'Animals', score: 2 },
        { score_id: 2, name: 'John', category: 'Films', score: 2 },
        { score_id: 3, name: 'Hamish', category: 'Science', score: 2 },
        { score_id: 4, name: 'Karel', category: 'History', score: 2 },
      ])
    });
};
