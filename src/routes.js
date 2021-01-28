const express = require('express');
const User_Controller = require('./controllers/User_Controller');

const routes = express.Router();

routes.post('/users', User_Controller.store);

module.exports = routes;