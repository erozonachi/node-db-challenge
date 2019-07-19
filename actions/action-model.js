const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('actions');
  },

  findById: function(id) {
    return db('actions')
      .where({ id }).first;
  },

  update: function (changes, id) {
    return db('actions')
      .where({ id })
      .update(changes)
      .then(count => (count > 0 ? this.findById(id) : null));
  },
};
