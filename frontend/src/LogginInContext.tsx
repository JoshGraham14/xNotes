import { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

interface ILoggedInContext {
	loggedIn: boolean
	setLoggedIn: Dispatch<SetStateAction<boolean>>
}

const initialContext: ILoggedInContext = {
	loggedIn: false,
	setLoggedIn: (): void => {
		throw new Error('setLoggedIn function must be overriden')
	},
}

const LoggedInContext = createContext<ILoggedInContext>(initialContext)

export default LoggedInContext
