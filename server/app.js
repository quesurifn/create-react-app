var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression')
var session = require('express-session');

var index = require('./routes/index');

var app = express();


app.use(compression({level: 9}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));

app.use(function(req, res, next) {
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../client/build')));



app.use('/api', index);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '../client/build/index.html');
})

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:


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
  console.error(err)
  // render the error page
  res.status(err.status || 500);
  res.send(err.message)
});

process.on('uncaughtException', function (err) {
  console.log(err);
})

module.exports = app;
