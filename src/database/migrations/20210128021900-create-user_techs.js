'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // O que as migrations precisam fazer se der certo
    return queryInterface.createTable('user_techs', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id:
      {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: { model: 'users', key: 'id' },
        onupdate: 'CASCADE',
        ondelete: 'CASCADE',
      },
      tech_id:
      {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: { model: 'techs', key: 'id' },
        onupdate: 'CASCADE',
        ondelete: 'CASCADE',
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
    return queryInterface.dropTable('user_techs');
  }
};
