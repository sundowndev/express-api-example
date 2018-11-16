const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

const secret = require.main.require('./config/secret');

module.exports = (req, res, next) => {
  const User = mongoose.model('User');

  User.findOne({
    email: req.body.email,
  }, (err, user) => {
    if (err) throw err;

    if (!user) {
      return next({ status: 400, message: 'Authentication failed. User not found.' });
    }

    // check if password matches
    return bcrypt.compare(req.body.password, user.password, (error, result) => {
      if (result && !error) {
        // if user is found and password is right create a token
        const dataUser = {
          id: user.id,
          email: user.email,
        };

        const token = jwt.sign({ user: dataUser }, secret, { expiresIn: '12h' });

        // return the information including token as JSON
        return res.json({
          success: true,
          access_token: token,
          user: {
            _id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          },
        });
      }

      return next({ status: 401, message: 'Authentication failed. Wrong password.' });
    });
  });
};
