
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {name: 'at home'},
        {name: 'at office'},
        {name: 'when online'},
        {name: 'when offline'},
        {name: 'at church'},
        {name: 'at club'},
        {name: 'at bank'}
      ]);
    });
};
