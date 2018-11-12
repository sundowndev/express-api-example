const note = require('express').Router();
const all = require('./all');
const single = require('./single');
//const create = require('./create');
//const update = require('./update');
//const delete = require('./delete');

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
note.get('/:noteId', single);

//note.post('/', create)
//note.post('/:noteId', update)
//note.post('/:noteId', delete)

module.exports = note;
