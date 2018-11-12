var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  firstname: {
      type: String,
      required: true
  },
  lastname: {
      type: String,
      required: true
  },
  username: {
      type: String,
      unique: true,
      required: true
  },
  password: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
