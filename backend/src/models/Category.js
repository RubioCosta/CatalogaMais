const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Category = db.define('Category', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        require: true
    }
});


module.exports = Category;