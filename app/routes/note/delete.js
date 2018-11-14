const mongoose = require('mongoose');

// TODO: verify auth
// TODO: verify owner

module.exports = (req, res) => {
  const NoteModel = mongoose.model('Note');

  NoteModel.findOneAndDelete({ _id: req.params.id }, (err, note) => {
    if (err) return res.status(500).send(err);
    if (!note) return res.status(404).json({ message: 'Note does not exists.' });

    const response = {
      message: 'Note successfully deleted',
    };

    return res.status(200).send(response);
  });
};
