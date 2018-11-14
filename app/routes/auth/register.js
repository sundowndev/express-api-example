const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

module.exports = (req, res, next) => {
  const UserModel = mongoose.model('User');

  const passwordHash = bcrypt.hashSync(req.body.password);

  const User = new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: passwordHash,
  });

  UserModel.findOne({
    username: req.body.username,
  }, (err, user) => {
    next({ status: 401, message: 'Username is already taken.' });
  });

  return User.save((saveErr) => {
    if (saveErr) {
      return next({ status: 500, message: 'Database error', error: [] });
    }

    return res.status(200).json(User);
  });
};
