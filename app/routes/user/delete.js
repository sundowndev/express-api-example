const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = (req, res, next) => {
  const UserModel = mongoose.model('User');

  const { user } = jwt.decode(req.headers.authorization);

  return UserModel.findOne({ _id: user.id })
    .lean()
    .exec()
    .then((User) => {
      if (User === null) {
        return next({ status: 404, message: 'User does not exists.' });
      }

      return bcrypt.compare(
        req.body.password,
        User.password,
        (error, result) => {
          if (!result || error) {
            return next({
              status: 401,
              message: 'Authentication failed. Wrong password.',
            });
          }

          return UserModel.deleteOne({ _id: User._id }, (err) => {
            if (err) {
              return next({ status: 500 });
            }

            return res.status(204).json({
              success: true,
              message: 'Account deleted.',
            });
          });
        },
      );
    });
};
