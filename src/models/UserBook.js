const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');
const Book = require("./Book");
const User = require('./User')


class UserBook extends Model {}

UserBook.init({
    read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    userScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
}, {
    sequelize,
    modelName: 'userBook',
    timestamps: false
});

User.belongsToMany(Book, { through: UserBook});
Book.belongsToMany(User, { through: UserBook});

module.exports = UserBook;