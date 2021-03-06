var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var addressbook = require("./routes/addressbook.js");
require('dotenv').config();

// set up 'utility' middleware
var app = express();

// connect to MongoDB
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00-cxj3t.mongodb.net:27017,cluster0-shard-00-01-cxj3t.mongodb.net:27017,cluster0-shard-00-02-cxj3t.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/addressbook', addressbook);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
