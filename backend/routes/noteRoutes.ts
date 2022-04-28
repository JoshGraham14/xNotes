import express, { Router } from 'express'
import { protect } from '../middleware/authMiddleware'

const router: Router = express.Router()
import {
	getNotes,
	getOneNote,
	setNote,
	updateNote,
	deleteNote,
} from '../controllers/noteController'

router.route('/').post(protect, setNote)
router
	.route('/:id')
	.get(protect, getOneNote)
	.put(protect, updateNote)
	.delete(protect, deleteNote)

router.route('/by-section/:id').get(protect, getNotes)

export { router as noteRoutes }
