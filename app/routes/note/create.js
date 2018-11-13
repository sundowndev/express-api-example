const mongoose = require('mongoose');

// TODO: verify auth

module.exports = (req, res) => {
  const NoteModel = mongoose.model('Note');

  const Note = new NoteModel({ title: req.body.title, text: req.body.text });

  Note.save((err) => {
    if (err) {
      return res.status(400).json({ success: false, msg: 'Title and text must not be blank.' });
    }

    return res.status(200).json(Note);
  });
};
