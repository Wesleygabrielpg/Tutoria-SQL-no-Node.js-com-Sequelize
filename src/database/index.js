// const consign = require('consign);
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User.js');
const Address = require('../models/Address.js');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;