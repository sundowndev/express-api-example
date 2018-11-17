const user = require('express').Router();

const profile = require('./profile');
const update = require('./update');
const remove = require('./delete');
const notes = require('./notes');

const Authentication = require.main.require('./app/validation/auth/auth');
const UpdateValidation = require.main.require('./app/validation/user/update');
const DeleteValidation = require.main.require('./app/validation/user/delete');

/**
 * @api {get} /user/me Get account information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {String} id Unique ID of the User.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} email  Email of the User.
 */
user.get('/me', Authentication, profile);

/**
  * @api {put} /user/me Update account information
  * @apiName UpdateUser
  * @apiGroup User
  * @apiDescription Send only password and new_password to change the password. Otherwise they will be ignored.
  *
  * @apiParam {String} firstname New firstname. (optional)
  * @apiParam {String} lastname New lastname. (optional)
  * @apiParam {String} email New email address. (optional)
  * @apiParam {String} password Actual password. (optional)
  * @apiParam {String} new_password New password (only if you passed password parameter).
  *
  * @apiSuccess {String} id Unique ID of the User.
  * @apiSuccess {String} firstname Firstname of the User.
  * @apiSuccess {String} lastname  Lastname of the User.
  * @apiSuccess {String} email  Email of the User.
  */
user.put('/me', Authentication, UpdateValidation, update);

/**
 * @api {delete} /user/me Delete account
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {String} password Account password.
 */
user.delete('/me', Authentication, DeleteValidation, remove);

/**
  * @api {get} /user/me/notes Get all notes
  * @apiName GetNotesByUserId
  * @apiGroup User notes
  *
  * @apiSuccess {Array} Array Notes of the user.
  */
user.get('/me/notes', Authentication, notes);

module.exports = user;
