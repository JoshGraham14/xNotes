import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import { Note } from '../models/noteModel'
import { IUserAuthRequest } from '../interfaces'

// @desc    Get notes
// @route   GET /api/notes
// @access  Private
export const getNotes = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		const notes = await Note.find({ user: req.user.id }).sort({
			section: 1,
		})
		res.status(200).json(notes)
	}
)

// @desc Get a single note
// @route GET /api/notes/:id
// @access Private
export const getOneNote = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		const note = await Note.findById(req.params.id)
		if (note === null) {
			res.status(404)
			throw new Error('Note not found')
		} else if (note.id === req.user.id) {
			res.status(200).json(note)
		} else {
			res.status(401)
			throw new Error('You are not authorized to view this note')
		}
	}
)

// @desc    Set note
// @route   POST /api/notes
// @access  Private
export const setNote = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		if (!req.body.content || !req.body.section) {
			res.status(400)
			throw new Error('Missing a text or section field')
		}

		const note = await Note.create({
			content: req.body.content,
			section: req.body.section,
			user: req.user.id,
		})

		res.status(200).json(note)
	}
)

// @desc    Update note
// @route   PUT /api/notes/:id
// @access  Private
export const updateNote = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		if (!req.params.id) {
			res.status(400)
			throw new Error('No ID supplied in the URL')
		}

		const note = await Note.findById(req.params.id)

		if (note === null) {
			res.status(404)
			throw new Error('Note not found')
			// Confirm note was made by the logged in user
		} else if (`${note.user}` === `${req.user.id}`) {
			const updatedNote = await Note.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				}
			)
			res.status(200).json(updatedNote)
		} else {
			res.status(401)
			throw new Error('You are not authorized to update this note')
		}
	}
)

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Private
export const deleteNote = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		if (!req.params.id) {
			res.status(400)
			throw new Error('No ID supplied in the URL')
		}

		const note = await Note.findById(req.params.id)
		if (note === null) {
			res.status(404)
			throw new Error('Note not found')
		} else if (`${note.user}` === `${req.user.id}`) {
			const deletedNote = await Note.findByIdAndDelete(req.params.id)
			res.status(200).json(deletedNote)
		} else {
			res.status(401)
			throw new Error('You are not authorized to delete this note')
		}
	}
)
