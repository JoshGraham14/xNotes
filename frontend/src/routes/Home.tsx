import { IUser } from '../auth/authFunctions'

export const Home = () => {
	const user: IUser | {} = JSON.parse(localStorage.getItem('user') || '{}')
	if (user === {}) {
		return (
			<div>
				<h1>Home</h1>
				<h2>You must log in to view/create notes</h2>
			</div>
		)
	} else {
		return (
			<div>
				<h1>Welcome {(user as IUser).name}</h1>
			</div>
		)
	}
}
