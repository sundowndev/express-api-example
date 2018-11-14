const note = require('express').Router();

const single = require('./single');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');

/**
 * @api {get} /note/:id Get note
 * @apiName GetNotes
 * @apiGroup Note
 *
 * @apiParam {String} id Note unique ID.
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
 * @api {delete} /note/:id Delete note
 * @apiName DeleteNote
 * @apiGroup Note
 *
 * @apiParam {String} id Note unique ID.
 */
note.delete('/:id', remove);

/**
 * @api {put} /note/:id Update note
 * @apiName UpdateNote
 * @apiGroup Note
 *
 * @apiParam {String} id Note unique ID.
 *
 * @apiSuccess {Object} Object Updated note.
 */
note.put('/:id', update);

module.exports = note;
