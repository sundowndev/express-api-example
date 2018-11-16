const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    firstname: Joi.string().min(2),
    lastname: Joi.string().min(2),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string(),
    new_password: Joi.string(),
  }).with('password', 'new_password')
    .without('firstname', 'password')
    .without('lastname', 'password')
    .without('email', 'password');

  Joi.validate({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    new_password: req.body.new_password,
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
