const db = require("../db");
const Book = require("../models/Book");

module.exports = {
    async getAllBooks(req, res, next) {
        try {
            const books = await Book.findAll({ 
                attributes: ['id', 'name']
            });
            res.send(books);
        } catch (error) {
            next(error);
        }
        
    },

    async getBook(req, res, next) {
        
        try {
            const bookId = req.params.id;
            var book = await Book.findOne({ 
                where: {id: bookId} 
            });
            res.send(book);
        } catch (error) {
            next(error);
        }
    },

    async postBook(req, res, next) {
        
        try {
            const book = req.body;
            await Book.create(book);
    
            res.redirect('/books');
        } catch (error) {
            next(error);
        }
    }
}