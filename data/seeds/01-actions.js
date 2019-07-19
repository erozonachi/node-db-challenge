
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          notes: "Surveyor's phone is 09023457689",
          description: "Contact the Surveyor",
          project_id: 1
        },
        {
          notes: "Engineer's phone is 08095083426",
          description: "Contact the Civil Engineer",
          project_id: 1
        },
        {
          notes: "Builder's phone is 08132144587",
          description: "Contact the Builder",
          project_id: 2,
          completed: true
        },
        {
          notes: "Plumber's phone is 05093457612",
          description: "Contact the Plumber",
          project_id: 2
        },
        {
          notes: "Hall Decorator's phone is 09045326798",
          description: "Contact the Hall Decorator",
          project_id: 3
        },
      ]);
    });
};
