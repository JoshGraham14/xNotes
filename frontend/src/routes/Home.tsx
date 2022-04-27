import { getCurrentUser, IUser } from '../util/auth/authFunctions'
import { Sidenav } from '../components/sidenav/Sidenav'

export const Home = () => {
	const user: IUser = getCurrentUser()
	if (user.name === '') {
		return (
			<>
				<h1>Home</h1>
				<h2>You must log in to view/create notes</h2>
			</>
		)
	} else {
		return (
			<>
				<div>
					<h1>Welcome {(user as IUser).name}</h1>
				</div>
				<Sidenav />
			</>
		)
	}
}
