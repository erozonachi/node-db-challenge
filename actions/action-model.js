const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('actions')
    .then(data => data.map(item => ({ ...item, completed: item.completed? true : false})));
  },

  findById: function(id) {
    return db('actions')
      .where({ id }).first()
      .then(data => ({ ...data, completed: data.completed? true : false}));
  },

  update: function (changes, id) {
    return db('actions')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? this.findById(id) : null));
  },

  remove: function (id) {
    let action = null;
    return this.findById(id)
      .then(data => {
        if(!data) {
          return 0;
        }
        action = data;
        return db('actions')
        .where({ id })
        .del();
      })
      .then(count => (count > 0 ? action : null));
  },

  findActionContexts: function (action_id) {
    return db('use-contexts')
      .select('contexts.id', 'name', 'notes')
      .join('contexts', 'context_id', 'contexts.id')
      .where({ action_id });
  }
};
