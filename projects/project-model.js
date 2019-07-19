const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('projects');
  },

  findById: function(id) {
    return db('projects')
      .where({ id }).first;
  },

  insert: function (project) {
    return db('projects')
    .insert(project)
    .then(([id]) => this.findById(id));
  },
};
