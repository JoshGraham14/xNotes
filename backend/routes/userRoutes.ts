import express, { Router } from 'express'

const router: Router = express.Router()
import {
    registerUser,
    loginUser,
    getCurrentUser
} from '../controllers/userController'

// router.route('/').get(getNotes).post(setNote)
// router.route('/:id').get(getOneNote).put(updateNote).delete(deleteNote)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/current', getCurrentUser)

export { router as userRoutes }