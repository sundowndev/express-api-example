const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: {
    type: String, required: [true, "can't be blank"],
  },
  lastname: {
    type: String, required: [true, "can't be blank"],
  },
  username: {
    type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true,
  },
  password: {
    type: String, required: [true, "can't be blank"],
  },
}, { timestamps: true });

module.exports = UserSchema;
