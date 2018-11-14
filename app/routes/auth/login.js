const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = (req, res, next) => {
  const User = mongoose.model('User');

  User.findOne({
    username: req.body.username,
  }, (err, user) => {
    if (err) throw err;

    if (!user) {
      next({ status: 400, message: 'Authentication failed. User not found.' });
    } else {
      // check if password matches
      const isMatch = bcrypt.compare(req.body.password, User.password);
      if (isMatch && !err) {
        // if user is found and password is right create a token
        const token = 'test';
        // return the information including token as JSON
        res.json({ success: true, access_token: `JWT ${token}` });
      } else {
        next({ status: 401, message: 'Authentication failed. User not found.' });
        res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
      }
    }
  });
};
