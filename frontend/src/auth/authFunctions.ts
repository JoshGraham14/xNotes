import axios from 'axios'

interface IUserRegisterInfo {
	name: string
	email: string
	password: string
	password2: string
}

interface IUserLoginInfo {
	email: string
	password: string
}

export interface IUser {
	_id: string
	name: string
	email: string
	token: string
}

const API_BASE = 'http://localhost:5000'

export const register = async (userInfo: IUserRegisterInfo): Promise<IUser> => {
	try {
		const { data } = await axios.post<IUser>(
			API_BASE + '/api/users/register',
			userInfo,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		)
		console.log(data)
		return data
	} catch (error: any) {
		throw new Error(error.message)
	}
}

export const login = async (userInfo: IUserLoginInfo): Promise<IUser> => {
	try {
		const { data } = await axios.post<IUser>(
			API_BASE + '/api/users/login',
			userInfo,
			{
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		)
		localStorage.setItem('user', JSON.stringify(data))
		return data
	} catch (error: any) {
		throw new Error(error.message)
	}
}
