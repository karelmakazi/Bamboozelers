
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('leaderboard').del()
    .then(function () {
      // Inserts seed entries
      return knex('leaderboard').insert([
        { score_id: 1, name: 'Alicia', category: 'Animals', score: 10 },
        { score_id: 2, name: 'John', category: 'Animals', score: 8 },
        { score_id: 3, name: 'Hamish', category: 'Comics', score: 7 },
        { score_id: 4, name: 'Karel', category: 'Comics', score: 6 },
        { score_id: 5, name: 'Karel', category: 'Sports', score: 6 },
        { score_id: 6, name: 'Hamish', category: 'Sports', score: 9 },
        { score_id: 7, name: 'John', category: 'Films', score: 6 },
        { score_id: 8, name: 'Alicia', category: 'Films', score: 10 },
      ])
    });
};
