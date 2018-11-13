const mongoose = require('mongoose');

// TODO: verify auth
// TODO: verify owner

module.exports = (req, res) => {
  const NoteModel = mongoose.model('Note');

  NoteModel.findByIdAndDelete(req.params.id)
    .lean()
    .exec()
    .then(() => {
      res.status(200).json({ success: true, msg: 'Note deleted.' });
    })
    .catch(() => {
      res.status(404).json({ success: false, msg: 'Note does not exists.' });
    });
};
