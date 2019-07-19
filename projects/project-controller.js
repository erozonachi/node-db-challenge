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

  read: async (req, res) => {
    try {
      if(req.project) {
        const actions = await projectModel.findProjectActions(req.project.id);
        return res.status(200).json({ ...req.project, actions });
      }

      const projects = await projectModel.find();
      res.status(200).json(projects);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
