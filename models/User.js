const mongoose = require('mongoose');


// User
const UserSchema = new mongoose.Schema({

  name: String,
  email: String,
  type: String,
  msg: String,
  created_date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('User', UserSchema);
