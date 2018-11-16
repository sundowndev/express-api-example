const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const NoteModel = mongoose.model('Note');

  const { user } = jwt.decode(req.headers.authorization);

  NoteModel.findOne({ _id: req.params.id })
    .lean()
    .exec()
    .then((note) => {
      if (note.user.toString() !== user.id) {
        return next({ status: 403, message: 'Access forbidden.' });
      }

      return res.status(200).json(note);
    })
    .catch(() => next({ status: 404, message: 'Note does not exists.' }));
};
