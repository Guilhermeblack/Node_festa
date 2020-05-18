var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressValidator = require('express-validator')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); 

var app = express();

let db = require('./config/database')
db('mongodb://localhost:27017/4mat2020')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(expressValidator());


app.use('/', indexRouter);
app.use('/users', usersRouter);

let teste = require('./routes/teste')
app.use('/teste', teste)

const promotor = require('./routes/promotor')
app.use('/promotor', promotor)

const portaria = require('./routes/portaria')
app.use('/portaria', portaria)

const caixa = require('./routes/caixa')
app.use('/caixa', caixa)


const bar = require('./routes/bar')
app.use('/bar', bar)

const ingresso = require('./routes/ingresso')
app.use('/ingresso', ingresso)

const produtos = require('./routes/produtos')
app.use('/produtos', produtos)

module.exports = app;
