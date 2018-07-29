const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var mongoURI = process.env.USER == "petrhanzl" ? 'mongodb://localhost:27017/TodoApp' : 'mongodb://<root>:<tajneheslo123>@ds259111.mlab.com:59111/todoapp';

mongoose.connect(mongoURI, (err, db) => {
  if(err) {
    return console.log('Unable to connect to db');
  }
  console.log('Connected to db');
});

module.exports = {mongoose};
