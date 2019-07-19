const projectModel = require('../projects/project-model');

module.exports = {
  validateProjectId: async (req, res, next) => {
    try {
      const { id } = req.params;

      const project = await projectModel.findById(id);
      if(project && project.name) {
        req.project = project;
        return next();
      }
      res.status(400).json({ message: 'Invalid project id' });
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
