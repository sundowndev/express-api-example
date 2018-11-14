const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    username: Joi.string().alphanum().min(3).max(30)
      .required(),
    password: Joi.string().required(),
  });

  Joi.validate({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
  },
  schema, (validateErr) => {
    if (validateErr) {
      return next({ status: 400, message: 'Form is invalid.', error: validateErr });
    }

    return next();
  });
};
