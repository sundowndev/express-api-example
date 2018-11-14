const user = require('express').Router();

const profile = require('./profile');
const update = require('./update');
const remove = require('./delete');
// const notes = require('./notes');

/**
 * @api {get} /user/me Get user information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} username  Username of the User.
 */
user.get('/me', profile);

/**
  * @api {put} /user/me Update account information
  * @apiName UpdateUser
  * @apiGroup User
  *
  * @apiSuccess {Object} user User object.
  */
user.put('/me', update);

/**
 * @api {delete} /user/me Delete account
 * @apiName DeleteUser
 * @apiGroup User
 */
user.delete('/me', remove);

/**
  * @api {get} /user/me/notes Get all notes
  * @apiName GetNotesByUserId
  * @apiGroup User notes
  *
  * @apiSuccess {Array} Array Notes of the user.
  */
user.get('/me/notes', profile);

module.exports = user;
