import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'

// @desc    Get notes
// @route   GET /api/notes
// @access  Private
export const getNotes = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({'goals': 'get request for goals'})
})

// @desc    Set note
// @route   POST /api/notes
// @access  Private
export const setNote = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({'goal': `set goal ${req.body.text}`})
})

// @desc    Update note
// @route   PUT /api/notes/:id
// @access  Private
export const updateNote = asyncHandler(async (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(400)
        throw new Error('Note not found')
    }

    res.status(200).json({'Note': `updated note with id ${req.params.id}`, 'text': `${req.body.text}`})
})

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Private
export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(400)
        throw new Error('Note not found')
    }

    res.status(200).json({'deleted': `Note with id: ${req.params.id}`})
})