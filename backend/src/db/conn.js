const { Sequelize } = require('sequelize')
require('dotenv').config();

const HOST = process.env.HOST;
const USER_NAME = process.env.USER_NAME;

const sequelize = new Sequelize('CatalogaMais', USER_NAME, '', {
  host: HOST,
  dialect: 'mysql'
});

module.exports = sequelize;