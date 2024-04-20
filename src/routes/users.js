var express = require('express');
var router = express.Router();

const {
    getAllUsers,
    getUser,
    postUser
} = require('../controllers/users');

const {
    postUserValidation,
    getUserValidation
} = require('../middleware/userValidation.middleware');

const { asyncErrorHandler } = require('../middleware');

router.get('/', asyncErrorHandler(getAllUsers));
router.get('/:id', getUserValidation, asyncErrorHandler(getUser));
router.post('/',postUserValidation, asyncErrorHandler(postUser));
// router.post("/:userId/borrow/:bookId", asyncErrorHandler(postBorrowBook));
// router.post("/:userId/return/:bookId", asyncErrorHandler(postReturnBook));

module.exports = router;