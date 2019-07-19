const db = require('../data/dbConfig');
const actionModel = require('../actions/action-model');

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

  update: function (changes, id) {
    return db('projects')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? this.findById(id) : null));
  },

  remove: function (id) {
    let project = null;
    return this.findById(id)
      .then(data => {
        if(!data) {
          return 0;
        }
        project = data;
        return db('projects')
        .where({ id })
        .del();
      })
      .then(count => (count > 0 ? project : null));
  },

  addAction: function (action, project_id) {
    return db('actions')
    .insert({...action, project_id})
    .then(([id]) => actionModel.findById(id)); 
  },

  findProjectActions: function (project_id) {
    return db('actions')
      .select('id', 'description', 'notes', 'completed')
      .where({ project_id });
  }
};
