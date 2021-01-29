'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // O que as migrations precisam fazer se der certo
    return queryInterface.createTable('techs', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: 
      {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      created_at:
      {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:
      {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    // O que as migrations precisam fazer caso algo dê errado
    // e o que ela precisa desfazer
    return queryInterface.dropTable('techs');
  }
};
