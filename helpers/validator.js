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

  validateProject: async (req, res, next) => {
    try {
      const { name, description, completed } = req.body;

      if(!name || name.trim() === '') {
        return res.status(400).json({ message: 'Missing required name field'});
      }
      if(!description || description.trim() === '') {
        return res.status(400).json({ message: 'Missing required description field'});
      }
      if(completed) {
        if(completed.trim() === '') {
          return res.status(400).json({ message: 'Missing required completed type field'});
        }
        if(completed !== 'false' && completed !== 'true') {
          return res.status(400).json({ message: 'Expects boolean value for completed field'});
        }
      }

      next();
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },

  validateAction: async (req, res, next) => {
    try {
      const { notes, description, completed } = req.body;

      if(notes) {
        if(notes.trim() === '') {
          return res.status(400).json({ message: 'notes field cannot be empty'});
        }
      }
      if(!description || description.trim() === '') {
        return res.status(400).json({ message: 'Missing required description field'});
      }
      if(completed) {
        if(completed.trim() === '') {
          return res.status(400).json({ message: 'Missing required completed type field'});
        }
        if(completed !== 'false' && completed !== 'true') {
          return res.status(400).json({ message: 'Expects boolean value for completed field'});
        }
      }

      next();
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
