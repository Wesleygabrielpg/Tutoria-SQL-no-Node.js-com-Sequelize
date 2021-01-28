const express = require('express');
const User_Controller = require('./controllers/User_Controller');

const routes = express.Router();

routes.post('/users', User_Controller.store);
routes.get('/users', User_Controller.index);

module.exports = routes;