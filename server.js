/**
 * Flags of the World Quiz
 * by Dave Schumaker
 */

var express = require('express');

// Setup default environment
var env = process.env.NODE_ENV = process.end.NODE_ENV || 'development';

var app = express();

// Configure views engine
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

// Catch all route handler.
// TODO: Build out specific routes that the server is aware of.
app.get('*', function(req, res) {
  res.render('index');
})