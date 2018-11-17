const auth = require('express').Router();

const register = require('./register');
const login = require('./login');
const reset = require('./reset');

const RegisterValidation = require.main.require('./app/validation/auth/register');
const LoginValidation = require.main.require('./app/validation/auth/login');

/**
 * @api {post} /auth/register Register
 * @apiName Register
 * @apiGroup Auth
 *
 * @apiParam {String} firstname Firstname of the user.
 * @apiParam {String} lastname Lastname of the user.
 * @apiParam {String} email email of the user.
 * @apiParam {String} password password of the user.
 *
 * @apiSuccess {Array} Array Array of Note objects.
 */
auth.post('/register', RegisterValidation, register);

/**
 * @api {post} /auth/login Get access token
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam {String} email email of the user.
 * @apiParam {String} password password of the user.
 *
 * @apiSuccess {String} access_token Access token.
 */
auth.post('/login', LoginValidation, login);

/**
 * @api {post} /auth/reset-password Reset password
 * @apiName ResetPass
 * @apiGroup Auth
 *
 * @apiParam {String} email email of the user.
 * @apiParam {String} password password of the user.
 */
auth.post('/rester-password', reset);

module.exports = auth;
