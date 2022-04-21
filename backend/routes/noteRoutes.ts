import express, { Router } from 'express'

const router: Router = express.Router()
import {
    getNotes,
    setNote,
    updateNote,
    deleteNote
} from '../controllers/noteController'

router.route('/').get(getNotes).post(setNote)
router.route('/:id').put(updateNote).delete(deleteNote)

export { router as noteRoutes }

