exports.up = (knex) => {
  return knex.schema.createTable('leaderboard', table => {
    table.increments('score_id').primary()
    table.string('name')
    table.string('category')
    table.integer('score')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('leaderboard')
}