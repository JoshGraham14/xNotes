import { useState, useEffect, useContext } from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IUser, logout, getCurrentUser } from '../../auth/authFunctions'
import LoggedInContext from '../../LogginInContext'

import './header.css'

export const Header = () => {
	const [user, setUser] = useState({
		_id: '',
		name: '',
		email: '',
		token: '',
	} as IUser)

	const { loggedIn, setLoggedIn } = useContext(LoggedInContext)

	useEffect(() => {
		const userInfo: IUser = getCurrentUser()
		if (userInfo.name !== '') {
			setUser(userInfo)
			setLoggedIn(true)
		}
	}, [])

	const handleLogout = () => {
		logout()
		setLoggedIn(false)
	}

	return (
		<>
			<header className='topnav'>
				<div className='logo'>
					<Link to='/' className='link logo-link'>
						xNotes
					</Link>
				</div>
				<ul className='topnav-links'>
					{loggedIn ? (
						<li>
							<Link
								to='/login'
								onClick={handleLogout}
								className='link icon-link'
							>
								<FaSignOutAlt /> Logout
							</Link>
						</li>
					) : (
						<>
							<li>
								<Link to='/login' className='link icon-link'>
									<FaSignInAlt /> Login
								</Link>
							</li>
							<li>
								<Link to='/register' className='link icon-link'>
									<FaUser /> Register
								</Link>
							</li>
						</>
					)}
				</ul>
			</header>
			<hr />
		</>
	)
}
