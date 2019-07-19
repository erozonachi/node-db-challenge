const express = require('express');
const validator = require('../helpers/validator');
const controller = require('./project-controller');

const app = express.Router();

app.post('/', validator.validateProject, controller.create);
app.post('/:id/actions', validator.validateProjectId, validator.validateAction, 
  controller.createAction);
app.get('/', controller.read);
app.get('/:id', validator.validateProjectId, controller.read);
app.put('/:id', validator.validateProjectId, validator.validateProject, controller.update);
app.delete('/:id', validator.validateProjectId, controller.delete);

module.exports = app;
