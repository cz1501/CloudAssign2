const express = require('express');
const bodyParser = require('body-parser');

// const {
//   getItems,
//   addNewItem,
// } = require('./data');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('/index');
});

app.get('/help', function (req, res) {
    res.render('help');
});

app.get('/index', function (req, res) {
    res.render('index');
});

app.get('/main', function (req, res) {
    res.render('main');
});

// app.get('/topics', async function (req, res) {
//   const todo = await getItems();
//   res.render('main', { topics: todo });
// });

// app.post('/topic', async function (req, res) {
//   const todoData = req.body;
//   await addNewItem(todoData);
//   res.redirect('/topics');
// });


app.listen(8080);