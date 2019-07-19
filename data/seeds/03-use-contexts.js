
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('use-contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('use-contexts').insert([
        {action_id: 1, context_id: 1},
        {action_id: 1, context_id: 2},
        {action_id: 2, context_id: 1},
        {action_id: 2, context_id: 2},
        {action_id: 2, context_id: 3}
      ]);
    });
};
