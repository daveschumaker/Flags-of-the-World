/**
 * Flags of the World Quiz
 * by Dave Schumaker
 */

var express = require('express');
var stylus = require('stylus');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// Setup default environment
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


// Configure Stylus module for compiling CSS
function compile (str, path) {
  return stylus(str).set('filename', path);
}

// Configure views engine using Jade
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(stylus.middleware({
  src: __dirname + '/public',
  compile: compile
}))
app.use(express.static(__dirname + '/public'));

// Catch all route handler.
// TODO: Build out specific routes that the server is aware of.
app.get('*', function(req, res) {
  res.render('index');
})

// Initialize server
var port = 3000;
console.log('Server online and listening on port ' + port);
app.listen(port);