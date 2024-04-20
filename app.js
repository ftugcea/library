const express = require('express');
const sequelize = require('./src/db')
const User = require('./src/models/User');
const Book = require('./src/models/Book');

sequelize.sync({ force:true }).then(() => console.log('db is ready'));

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

var usersRouter = require('./src/routes/users');
var booksRouter = require("./src/routes/books");

app.use('/users', usersRouter);
app.use("/books", booksRouter);

// app.post('/users', async (req, res) => {
//     await User.create(req.body);
//     res.send('user created sucessfully');
// });

// app.get('/users', async (req, res) => {
    
//     var users = await User.findAll({
//         include: [{
//             model: Book, // include data from Book model
//             attributes: ['name', 'score'], // include only these fields              
//         }]
//     });
//     res.send(users);
// });

// app.get('/users/:id', async (req, res) => {
//     const requestId = req.params.id;
//     const user = await User.findOne({ where: {id: requestId}});
//     res.send(user);
// });

// app.post('/books', async (req, res) => {
//     await Book.create(req.body);
//     res.send('book created sucessfully');
// });

// app.get('/books', async (req, res) => {
//     const books = await Book.findAll({
//         attributes: ['id', 'name']
//     });
//     res.send(books);
// });

// app.get('/books/:id', async (req, res) => {
//     const requestId = req.params.id;
//     const book = await Book.findOne({
//         where: {id: requestId},
//         attributes: ['id', 'name', 'score']
//     });
//     res.send(book);
// });

// app.post('/users/:userId/borrow/:id', async (req, res) => {
//     const userId = req.params.userId;
//     const bookId = req.params.id;
//     const book = await Book.findOne({where: {id: bookId}});
//     book.userId = userId;
//     await book.save();

//     res.send('book borrowed sucessfully');
// });



