
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('leaderboard').del()
    .then(function () {
      // Inserts seed entries
      return knex('leaderboard').insert([
        { score_id: 1, name: 'Alicia', category: 'Animals', score: 10 },
        { score_id: 2, name: 'John', category: 'Film', score: 8 },
      ])
    });
};
