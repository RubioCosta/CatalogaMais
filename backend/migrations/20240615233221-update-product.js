const { DataTypes } = require('sequelize');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'status', {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN
      }
    )
  }
};
