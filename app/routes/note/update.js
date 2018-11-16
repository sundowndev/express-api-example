const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const NoteModel = mongoose.model('Note');

  const { user } = jwt.decode(req.headers.authorization);

  NoteModel.findOne({ _id: req.params.id }, (err, note) => {
    if (err) return next({ status: 500, error: [err] });
    if (!note) return next({ status: 404, message: 'Note does not exists.' });

    if (note.user.toString() !== user.id) {
      return next({ status: 403, message: 'Access forbidden.' });
    }

    note.title = req.body.title || note.title;
    note.text = req.body.text || note.text;
    note.save();

    return res.status(200).send(note);
  });
};
