const user = require('express').Router();

const profile = require('./profile');
const update = require('./update');
const remove = require('./delete');
const notes = require('./notes');

const Authentication = require.main.require('./app/validation/auth');

/**
 * @api {get} /user/me Get account information
 * @apiName GetUser
 * @apiGroup User
 *
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
  * @apiParam {String} Firstname New firstname.
  * @apiParam {String} Lastname New lastname.
  * @apiParam {String} Email New email address.
  * @apiParam {String} Password Actual password.
  * @apiParam {String} Password New password.
  *
  * @apiSuccess {Object} user User object.
  */
user.put('/me', Authentication, update);

/**
 * @api {delete} /user/me Delete account
 * @apiName DeleteUser
 * @apiGroup User
 */
user.delete('/me', Authentication, remove);

/**
  * @api {get} /user/me/notes Get all notes
  * @apiName GetNotesByUserId
  * @apiGroup User notes
  *
  * @apiSuccess {Array} Array Notes of the user.
  */
user.get('/me/notes', Authentication, notes);

module.exports = user;
