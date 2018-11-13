const auth = require('express').Router();

const register = require('./register');
const login = require('./login');

/**
 * @api {post} /auth/register Register
 * @apiName Register
 * @apiGroup Auth
 *
 * @apiParam {String} firstname Firstname of the user.
 * @apiParam {String} lastname Lastname of the user.
 * @apiParam {String} username username of the user.
 * @apiParam {String} password password of the user.
 *
 * @apiSuccess {Array} Array Array of Note objects.
 */
auth.post('/register', register);

/**
 * @api {post} /auth/login Request JWT token
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam {String} username username of the user.
 * @apiParam {String} password password of the user.
 *
 * @apiSuccess {string} jwt_token JWT token.
 */
auth.post('/login', login);

// note.post('/rester-password', reset)

module.exports = auth;
