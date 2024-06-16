const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Product = require('./Product');
const Supplier = require('./Supplier');

const SupplierProduct = db.define('SupplierProduct', {
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      require: true,
      references: {
        model: Supplier,
        key: 'id'
      }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        require: true,
        references: {
          model: Product,
          key: 'id'
        }
    }
});


module.exports = SupplierProduct;