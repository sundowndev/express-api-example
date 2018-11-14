const mongoose = require('mongoose');

// TODO: verify owner

module.exports = (req, res) => {
  const NoteModel = mongoose.model('Note');

  NoteModel.findOne({ _id: req.params.id })
    .lean()
    .exec()
    .then((result) => {
      if (result === null) {
        res.status(404).json({ success: false, msg: 'Note does not exists.' });
      }

      res.status(200).json(result);
    })
    .catch(() => {
      res.status(404).json({ success: false, msg: 'Note does not exists.' });
    });
};
