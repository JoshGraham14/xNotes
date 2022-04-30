import axios from 'axios'
import { getCurrentUser, IUser } from '../auth/authFunctions'

const API_BASE = 'http://localhost:5000'

export interface ISection {
	_id: string
	user: string
	name: string
	createdAt: string
	updatedAt: string
	__v: number
}

export interface INote {
	_id: string
	user: string
	section: string
	content: string
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

export const getNotes = async (
	user: IUser,
	sectionID: string
): Promise<INote[]> => {
	try {
		const { data } = await axios.get<INote[]>(
			API_BASE + '/api/notes/by-section/' + sectionID,
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

export const getOneNote = async (noteId: string): Promise<INote> => {
	const user = getCurrentUser()
	try {
		const { data } = await axios.get<INote>(
			`${API_BASE}/api/notes/${noteId}`,
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

export const createSection = async (
	user: IUser,
	sectionName: string
): Promise<ISection> => {
	try {
		const { data } = await axios.post<ISection>(
			API_BASE + '/api/sections',
			{ name: sectionName },
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

export const saveNote = async (
	content: string,
	noteId: string
): Promise<INote> => {
	const user = getCurrentUser()
	try {
		const { data } = await axios.put<INote>(
			`${API_BASE}/api/notes/${noteId}`,
			{
				content: content,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer: ${user.token}`,
				},
			}
		)
		console.log(data)
		return data
	} catch (error: any) {
		console.log(error.message)
		throw new Error(error.message)
	}
}
