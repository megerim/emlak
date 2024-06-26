var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var loginRouter = require('./routes/login');
var contactRouter = require('./routes/contact');
var submitRouter = require('./routes/submit');
var registerRouter = require('./routes/register');
var listRouter = require('./routes/list');
var detailRouter = require('./routes/detail');
var mapRouter = require('./routes/map');
var servicesRouter = require('./routes/services');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/login', loginRouter);
app.use('/contact', contactRouter);
app.use('/submit', submitRouter);
app.use('/register', registerRouter);
app.use('/list', listRouter);
app.use('/detail', detailRouter);
app.use('/map', mapRouter);
app.use('/services', servicesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


  console.log('Server is running on http://localhost:3000');

module.exports = app;
