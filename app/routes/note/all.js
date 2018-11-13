const mongoose = require('mongoose');

module.exports = (req, res) => {
  const NoteModel = mongoose.model('Note');

  NoteModel.find({})
    .lean()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    });
};
