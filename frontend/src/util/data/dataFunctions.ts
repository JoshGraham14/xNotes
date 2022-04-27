import axios from 'axios'
import { IUser } from '../auth/authFunctions'

const API_BASE = 'http://localhost:5000'

export interface ISection {
	_id: string
	user: string
	name: string
	createdAt: string
	updatedAt: string
	__v: number
}

export const getSections = async (user: IUser): Promise<ISection[]> => {
	try {
		const { data } = await axios.get<ISection[]>(
			API_BASE + '/api/sections',
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer: ${user.token}`,
				},
			}
		)
		return data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
