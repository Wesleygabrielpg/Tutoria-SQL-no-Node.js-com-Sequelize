// Inicializa as models/conexões com o banco de dados
// const consign = require('consign); // Ele agiliza a conexão
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User.js');
const Address = require('../models/Address.js');
const Tech = require('../models/Tech.js');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;