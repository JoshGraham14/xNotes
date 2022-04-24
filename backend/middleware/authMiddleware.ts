import asyncHandler from 'express-async-handler'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IUserAuthRequest, IToken } from '../interfaces'

import dotenv from 'dotenv'
dotenv.config()

import { User } from '../models/userModel'

export const protect = asyncHandler(
	async (req: IUserAuthRequest, res: Response, next: NextFunction) => {
		let token: string | undefined

		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			try {
				// Get token from header
				token = req.headers.authorization.split(' ')[1]

				// Verify token
				const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)

				// Get user from the token

				req.user = await User.findById((decoded as IToken).id).select(
					'-password'
				)
				next()
			} catch (error) {
				console.log(error)
				res.status(401)
				throw new Error('Not authorized')
			}
		}
		if (!token) {
			res.status(401)
			throw new Error('Not authorized, no token')
		}
	}
)
