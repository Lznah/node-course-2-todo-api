const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
  if(err) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to db');
});

module.exports = {mongoose};
