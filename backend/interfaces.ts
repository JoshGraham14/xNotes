import { Request } from 'express'
import jwt from 'jsonwebtoken'

export interface IUserAuthRequest extends Request {
	user?: any
}

export interface IToken extends jwt.JwtPayload {
	id?: number
}
