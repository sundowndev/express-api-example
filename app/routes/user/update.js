const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = (req, res, next) => {
  const UserModel = mongoose.model('User');

  const { user } = jwt.decode(req.headers.authorization);

  return UserModel.findOne({ _id: user.id }, (err, userObj) => {
    if (!userObj) {
      return next({ status: 401, message: 'User does not exists.' });
    }

    if (req.body.password) {
      bcrypt.compare(req.body.password, user.password, (error, result) => {
        if (!result || error) {
          return next(
            {
              status: 401,
              message: 'Authentication failed. Wrong password.',
            }
          );
        }

        if (req.body.password === req.body.new_password) {
          return next(
            {
              status: 401,
              message: 'New password must be different than old password.',
            }
          );
        }

        userObj.password = bcrypt.hashSync(req.body.new_password);
      });
    } else {
      userObj.firstname = req.body.firstname || userObj.firstname;
      userObj.lastname = req.body.lastname || userObj.lastname;
      userObj.email = req.body.email || userObj.email;
    }

    return userObj.save(() => res.status(200).json(userObj));
  });
};
