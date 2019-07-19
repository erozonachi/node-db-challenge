const db = require('../data/dbConfig');

module.exports = {
  find: function() {
    return db('actions');
  },

  findById: function(id) {
    return db('actions')
      .where({ id }).first;
  },
};
