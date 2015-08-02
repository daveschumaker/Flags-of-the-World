/**
 * Flags of the World Quiz
 * by Dave Schumaker
 */

var express = require('express');
var stylus = require('stylus');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

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

mongoose.connect('mongodb://localhost/flags');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', function callback() {
  console.log('Database connection to flags is open...');
})

var messageSchema = mongoose.Schema({
  message: String
})
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
  mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath);
});

// Catch all route handler.
// TODO: Build out specific routes that the server is aware of.
app.get('*', function(req, res) {
  res.render('index', {
    mongoMessage: mongoMessage,
  });
})

// Initialize server
var port = 3000;
console.log('Server online and listening on port ' + port);
app.listen(port);