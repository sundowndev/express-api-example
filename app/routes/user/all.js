const mongoose = require('mongoose');

module.exports = (req, res) => {
  const UserModel = mongoose.model('User');
  const users = UserModel.find()
    .lean()
    .exec()
    .then(() => {
      res.status(200).json(users);
    });
};
