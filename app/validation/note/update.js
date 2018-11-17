const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().min(2),
    text: Joi.string().min(2),
  });

  Joi.validate({
    title: req.body.title,
    text: req.body.text,
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
