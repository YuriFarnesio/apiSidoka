const express = require('express');

const DokaController = require('./controllers/DokaController');

const routes = express.Router();

routes.post('/store', DokaController.store);
routes.post('/album', DokaController.index);

module.exports = routes;