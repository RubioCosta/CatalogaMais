require('dotenv').config();

module.exports = {
  production: {
    username: process.env.USER_NAME,
    password: '',
    database: 'catalogamais',
    host: process.env.HOST,
    dialect: 'mysql'
  }
};