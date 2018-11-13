const Joi = require('joi');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt-nodejs');

const schema = Joi.object().keys({
  firstname: Joi.string().alphanum().min(2),
  lastname: Joi.string().alphanum().min(2),
  username: Joi.string().alphanum().min(3).max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [Joi.string(), Joi.number()],
}).with('username').without('password', 'access_token');
