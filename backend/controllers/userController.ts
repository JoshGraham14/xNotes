import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { User, IUser } from '../models/userModel'
import { IUserAuthRequest, IToken } from '../interfaces'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
export const registerUser = asyncHandler(
	async (req: Request, res: Response) => {
		const { name, email, password }: IUser = req.body

		if (!name || !email || !password) {
			res.status(400)
			throw new Error('Please add all fields')
		}
		// Check if user exists
		const userExists = await User.findOne({ email })

		if (userExists) {
			res.status(400)
			throw new Error('User already exists')
		}

		// Hash password
		const salt = await bcrypt.genSalt()
		const hashedPassword = await bcrypt.hash(password, salt)

		// Create user
		const user = await User.create({
			name,
			email,
			password: hashedPassword,
		})

		if (user) {
			res.status(201).json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user._id),
			})
		} else {
			res.status(400)
			throw new Error('Invaild user data')
		}
	}
)

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
	const { email, password }: IUser = req.body

	// Find the user by email
	const user = await User.findOne({ email })

	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid credentials')
	}
})

// @desc    Get user data
// @route   GET /api/users/current
// @access  Private
export const getCurrentUser = asyncHandler(
	async (req: IUserAuthRequest, res: Response) => {
		const { _id, name, email }: any = await User.findById(req.user.id)

		res.status(200).json({
			id: _id,
			name,
			email,
		})
	}
)

const generateToken = (id: mongoose.Types.ObjectId): string => {
	return jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
		expiresIn: '30d',
	})
}
