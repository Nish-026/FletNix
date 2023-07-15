const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  Registration_year:{
    type: Date,
    default: new Date().getFullYear()
  }
});

const User = mongoose.model('User', userSchema);
module.exports = {User};