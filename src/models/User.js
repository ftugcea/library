const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');
const Book = require("./Book");

class User extends Model{}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
});

module.exports = User;