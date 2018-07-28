const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    minglength: 1
  }
});

module.exports = {User};
