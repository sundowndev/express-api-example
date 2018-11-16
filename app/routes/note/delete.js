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

    note.delete();

    const response = {
      success: true,
      message: 'Note successfully deleted',
    };

    return res.status(204).send(response);
  });
};
