const projectModel = require('./project-model');

module.exports = {
  create: async (req, res) => {
    try {
      const result = await projectModel.insert(req.body);
      res.status(201).json(result);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
