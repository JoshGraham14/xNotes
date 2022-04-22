import express, { Router } from 'express'

const router: Router = express.Router()
import {
    getNotes,
    getOneNote,
    setNote,
    updateNote,
    deleteNote
} from '../controllers/noteController'

router.route('/').get(getNotes).post(setNote)
router.route('/:id').get(getOneNote).put(updateNote).delete(deleteNote)

export { router as noteRoutes }

