const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    password: Joi.string().required(),
  });

  Joi.validate({
    password: req.body.password,
  },
  schema, (validateErr) => {
    if (validateErr) {
      return next({
        status: 400,
        message: 'Form is invalid.',
        error: validateErr.details,
      });
    }

    return next();
  });
};
