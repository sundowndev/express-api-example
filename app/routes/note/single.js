const mongoose = require('mongoose');

module.exports = (req, res) => {
  const NoteModel = mongoose.model('Note');

  NoteModel.find({ _id: req.params.id })
    .lean()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(404).json({ success: false, msg: 'Note does not exists.' });
    });
};
