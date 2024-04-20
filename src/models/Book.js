const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');
const User = require("./User");

class Book extends Model{}

Book.init({
    name: {
        type: DataTypes.STRING
    },
    score: {
        type: DataTypes.FLOAT,
        defaultValue: -1
    }
}, {
    sequelize,
    modelName: 'book',
    timestamps: false
});

module.exports = Book;