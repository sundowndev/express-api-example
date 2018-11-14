const mongoose = require('mongoose');

// TODO: verify auth
// TODO: verify owner

module.exports = (req, res) => {
  const NoteModel = mongoose.model('Note');

  NoteModel.findOneAndUpdate(
    // the id of the item to find
    { _id: req.params.id },

    // the change to be made. Mongoose will smartly combine your existing
    // document with this change, which allows for partial updates too
    req.body,

    // an option that asks mongoose to return the updated version
    // of the document instead of the pre-updated one.
    { new: true },

    // the callback function
    (err, note) => {
    // Handle any possible database errors
      if (err) return res.status(500).send(err);
      return res.json(note);
    },
  );
};
