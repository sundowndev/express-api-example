const Joi = require('joi');
const jwt = require('jsonwebtoken');

const secret = require.main.require('./config/secret');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    access_token: Joi.string().required(),
  });

  Joi.validate({
    access_token: req.headers.authorization,
  },
  schema, (validateErr) => {
    if (validateErr) {
      return next({ status: 401, error: validateErr.details });
    }

    return jwt.verify(req.headers.authorization, secret, (err, decoded) => {
      if (err) {
        return next({ status: 401, message: 'Token error.', error: [err] });
      }

      return next();
    });
  });
};
