const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Category = require('./Category')

const Product = db.define('Product', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        require: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: Category,
          key: 'id'
      }
  }
});

module.exports = Product;