const { where } = require("sequelize");
const db = require("../db");
const User = require("../models/User");
const Book = require("../models/Book");
const UserBook = require('../models/UserBook');

module.exports = {
    async getAllUsers(req, res, next) {
        try {
            const users = await User.findAll({ 
                attributes: ['id', 'name']
            });
            res.send(users);
        } catch (error) {
            next(error);
        }
    },
    
    async getUser(req, res, next) {
        try {
            const userId = req.params.id;
            const user = await User.findOne({ 
                where: {id: userId},
                // include: [
                //     {
                //         model: Book,
                //         through: {
                //             model: UserBook,
                //             where: { read: true }
                //         },
                //         as: 'past'
                //     },
                //     {
                //         model: Book,
                //         through: {
                //             model: UserBook,
                //             where: { read: false }
                //         },
                //         as: 'present'
                //     }
                // ]
            });
            res.send(user);
        } catch (error) {
            next(error);
        }
    },
    
    async postUser(req, res, next) {
        try {
            await User.create(req.body);
            res.redirect('/users');
        } catch (error) {
            next(error);
        }
    }
}