var express = require('express');
var router = express.Router();

const {
    getAllBooks,
    getBook,
    postBook
} = require('../controllers/books');

const {
    postBookValidation,
    getBookValidation
} = require('../middleware/bookValidation.middleware');

const { asyncErrorHandler } = require('../middleware');

router.get('/', asyncErrorHandler(getAllBooks));
router.get('/:id', getBookValidation, asyncErrorHandler(getBook));
router.post('/', postBookValidation, asyncErrorHandler(postBook));

module.exports = router;