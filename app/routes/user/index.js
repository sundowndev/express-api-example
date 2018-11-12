const user = require('express').Router();

const all = require('./all');
const profile = require('./profile');
const single = require('./single');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');

/**
 * @api {get} /user Request all Users information
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Array} Array User objects.
 */
user.get('/', all);

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} username  Username of the User.
 */
user.get('/:userId', single);

/**
 * @api {get} /user/me Request current account information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 * @apiSuccess {String} username  Username of the User.
 */
user.get('/me', profile);

/**
 * @api {put} /user/me Update current account information
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiParam {String} firstname Firstname of the User.
 * @apiParam {String} lastname  Lastname of the User.
 * @apiParam {String} username  Username of the User.
 */
user.put('/me', profile);

/**
 * @api {delete} /user/me Delete current account
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {String} firstname Firstname of the User.
 * @apiParam {String} lastname  Lastname of the User.
 * @apiParam {String} username  Username of the User.
 */
 user.delete('/me', profile);

 /**
  * @api {get} /user/me/notes Get notes created by this account
  * @apiName GetNotes
  * @apiGroup User,Note
  *
  * @apiSuccess {string} title Title of the note.
  * @apiSuccess {string} text Text of the note.
  */
 user.get('/me/notes', profile);

//user.post('/', create)
//user.put('/:userId', update)
//user.delete('/:userId', remove)

module.exports = user;
