const note = require('express').Router();

const single = require('./single');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');

const CreateValidation = require.main.require('./app/validation/note/create');
const UpdateValidation = require.main.require('./app/validation/note/update');
const Authentication = require.main.require('./app/validation/auth/auth');

/**
 * @api {get} /note/:id Get note
 * @apiName GetNotes
 * @apiGroup Note
 *
 * @apiParam {String} id Note unique ID.
 *
 * @apiSuccess {String} title Title of the note.
 * @apiSuccess {String} text Text of the note.
 */
note.get('/:id', Authentication, single);

/**
 * @api {post} /note Create note
 * @apiName CreateNote
 * @apiGroup Note
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "<Access_Token>"
 *     }
 *
 * @apiSuccess {String} title Title of the note.
 * @apiSuccess {String} text Text of the note.
 */
note.post('/', Authentication, CreateValidation, create);

/**
 * @api {put} /note/:id Update note
 * @apiName UpdateNote
 * @apiGroup Note
 *
 * @apiParam {String} id Note unique ID.
 *
 * @apiSuccess {String} title Title of the note.
 * @apiSuccess {String} text Text of the note.
 */
note.put('/:id', Authentication, UpdateValidation, update);

/**
 * @api {delete} /note/:id Delete note
 * @apiName DeleteNote
 * @apiGroup Note
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "message": "Note successfully deleted."
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "success": false,
 *       "message": "Access forbidden.",
 *       "errors": []
 *     }
 *
 * @apiParam {String} id Note unique ID.
 */
note.delete('/:id', Authentication, remove);

module.exports = note;
