const note = require('express').Router();

const all = require('./all');
const single = require('./single');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');

/**
 * @api {get} /note Request all notes
 * @apiName GetNotes
 * @apiGroup Note
 *
 * @apiSuccess {Array} Array Array of Note objects.
 */
note.get('/', all);

/**
 * @api {get} /note/:id Request Note information
 * @apiName GetNotes
 * @apiGroup Note
 *
 * @apiParam {Number} id Notes unique ID.
 *
 * @apiSuccess {string} title Title of the note.
 * @apiSuccess {string} text Text of the note.
 */
note.get('/:id', single);

/**
 * @api {post} /note Create note
 * @apiName CreateNote
 * @apiGroup Note
 *
 * @apiSuccess {Object} Object Created note.
 */
note.post('/', create);

/**
 * @api {delete} /note/:id Delete a note
 * @apiName DeleteNote
 * @apiGroup Note
 *
 * @apiParam {Number} id Note id.
 */
note.delete('/:id', remove);

/**
 * @api {put} /note/:id Update a note
 * @apiName UpdateNote
 * @apiGroup Note
 *
 * @apiParam {Number} id Note id.
 *
 * @apiSuccess {Object} Object Updated note.
 */
note.put('/:id', update);

module.exports = note;
