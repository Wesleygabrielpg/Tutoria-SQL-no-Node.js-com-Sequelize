const express = require('express');
const User_Controller = require('./controllers/User_Controller');
const Address_Controller = require('./controllers/Address_Controller');

const routes = express.Router();

routes.post('/users', User_Controller.store);
routes.get('/users', User_Controller.index);

routes.post('/users/:user_id/addresses', Address_Controller.index);
routes.get('/users/:user_id/addresses', Address_Controller.index);
// Para sempre q criar um address para um user especifico, a rota ja está indicando qual user
// ex: POST localhost:3333/users/3/address

module.exports = routes;