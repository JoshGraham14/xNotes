import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import { Note } from '../models/noteModel'

// @desc    Get notes
// @route   GET /api/notes
// @access  Private
export const getNotes = asyncHandler(async (req: Request, res: Response) => {
    const notes = await Note.find()
    console.log(typeof(notes))
    res.status(200).json(notes)
})

// @desc Get a single note
// @route GET /api/notes/:id
// @access Private
export const getOneNote = asyncHandler(async (req: Request, res: Response) => {
    try {
        const note = await Note.findById(req.params.id)
        res.status(200).json(note)
    } catch {
        res.status(404).json({'status': 'Note not found'})
    }
    
})

// @desc    Set note
// @route   POST /api/notes
// @access  Private
export const setNote = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.content) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const note = await Note.create({
        content: req.body.content,
    })

    res.status(200).json(note)
})

// @desc    Update note
// @route   PUT /api/notes/:id
// @access  Private
export const updateNote = asyncHandler(async (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(400)
        throw new Error('No ID supplied in the URL')
    }

    try {
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json(updatedNote)
    } catch {
        res.status(404).json({'status': 'Note not found'})
    }
})

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Private
export const deleteNote = asyncHandler(async (req: Request, res: Response) => {
    if (!req.params.id) {
        res.status(400)
        throw new Error('No ID supplied in the URL')
    }

    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedNote)
    } catch {
        res.status(404).json({'status': 'Note not found'})
    }
})