const express = require('express');
const validator = require('../helpers/validator');
const controller = require('./action-controller');

const app = express.Router();

app.get('/', controller.read);
app.get('/:id', validator.validateActionId, controller.read);
app.put('/:id', validator.validateActionId, validator.validateAction, controller.update);
app.delete('/:id', validator.validateActionId, controller.delete);

module.exports = app;
