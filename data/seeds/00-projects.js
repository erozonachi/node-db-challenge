
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "My Castle Plan",
          description: "My dream castle building plan"
        },
        {
          name: "My Mansion Plan",
          description: "My dream mansion building plan"
        },
        {
          name: "Ikenga's upcoming wedding",
          description: "A friend's wedding party coming up 10th of September, 2019"
        },
      ]);
    });
};
