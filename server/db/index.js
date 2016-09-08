var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/drawings';

mongoose.connect(mongoUri);

var db = mongoose.connection;

db.on('error', function (err) {
  console.error(err);
});

db.once('open', function() {
  console.log('DB is hooked up!');
});

module.exports = db;
