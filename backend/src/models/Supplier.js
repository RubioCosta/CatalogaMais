const { DataTypes } = require('sequelize');
const { cnpj } = require('cpf-cnpj-validator')

const db = require('../db/conn');

const Supplier = db.define('Supplier', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        require: true
    },
    cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
      require: true,
      unique: true,
      validate:{
        isValidCnpj(value) {
          if (!cnpj.isValid(value)) {
              throw new Error('CNPJ inválido.');
          }
        }
      }
    }
});


module.exports = Supplier;