const actionModel = require('./action-model');

module.exports = {
  read: async (req, res) => {
    try {
      if(req.action) {
        const contexts = await actionModel.findActionContexts(req.action.id);
        return res.status(200).json({ ...req.action, contexts });
      }

      const actions = await actionModel.find();
      res.status(200).json(actions);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },

  update: async (req, res) => {
    try {
      const result = await actionModel.update(req.body, req.action.id);
      res.status(200).json(result);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await actionModel.remove(req.action.id);
      res.status(200).json({ 
        message: 'Delete successful',
        removed: result
      });
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
