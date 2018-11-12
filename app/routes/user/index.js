const user = require('express').Router();
const all = require('./all');
const single = require('./single');
//const create = require('./create');
//const update = require('./update');
//const delete = require('./delete');

/**
 * @api {get} /user Request all Users information
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Array} Array Array of User objects.
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

//user.post('/', create)
//user.post('/:userId', update)
//user.post('/:userId', delete)

module.exports = user;
