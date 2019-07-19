
exports.up = function(knex) {
  return knex.schema
    .createTable('contexts', tbl => {
      tbl.increments();
      tbl.text('name')
        .unique()
        .notNullable();
      tbl.text('notes');
    })
    .createTable('use-contexts', tbl => {
      tbl.increments();
      tbl.integer('action_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('actions')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('context_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('contexts')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.unique(['action_id', 'context_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('contexts')
    .dropTableIfExists('use-contexts');
};
