const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const NoteModel = mongoose.model('Note');

  const { user } = jwt.decode(req.headers.authorization);

  const Note = new NoteModel({
    title: req.body.title,
    text: req.body.text,
    user: user.id,
  });

  Note.save((err) => {
    if (err) {
      return next({ status: 400, error: [err] });
    }

    return res.status(201).json(Note);
  });
};
