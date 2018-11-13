const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String, required: [true, "can't be blank"],
  },
  text: {
    type: String, required: [true, "can't be blank"],
  },
}, { timestamps: true });

module.exports = NoteSchema;
