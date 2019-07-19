const actionModel = require('./action-model');

module.exports = {
  read: async (req, res) => {
    try {
      if(req.action) {
        return res.status(200).json(req.action);
      }

      const actions = await actionModel.find();
      res.status(200).json(actions);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
};
