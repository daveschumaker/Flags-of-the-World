/**
 * Flags of the World Quiz
 * by Dave Schumaker
 */

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var flags = require('./server/world-flags');
// Setup default environment
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// mongoose.connect('mongodb://localhost/flags');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error!'));
// db.once('open', function callback() {
//   console.log('Database connection to flags is open...');
// })

console.log(flags.getRandom());

// Initialize server
var port = 3000;
console.log('Server online and listening on port ' + port);
app.listen(port);