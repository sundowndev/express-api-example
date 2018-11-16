const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const NoteModel = mongoose.model('Note');

  const { user } = jwt.decode(req.headers.authorization);

  NoteModel.find({ user: user.id })
    .lean()
    .exec()
    .then((notes) => {
      res.status(200).json(notes);
    });
};
