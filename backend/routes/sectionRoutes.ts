import express, { Router } from 'express'
import { protect } from '../middleware/authMiddleware'

const router: Router = express.Router()

import {
	getSections,
	setSection,
	updateSection,
} from '../controllers/sectionController'

router.route('/').get(protect, getSections).post(protect, setSection)
router.route('/:id').put(protect, updateSection)

export { router as sectionRoutes }
