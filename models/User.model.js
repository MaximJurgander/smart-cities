const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Must have a username!']
  },
  password: {
    type: String,
    required: [true, 'Must have a password!']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
