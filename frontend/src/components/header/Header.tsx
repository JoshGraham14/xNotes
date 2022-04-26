import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './header.css'

export const Header = () => {
	return (
		<>
			<header className='topnav'>
				<div className='logo'>
					<Link to='/' className='link logo-link'>
						xNotes
					</Link>
				</div>
				<ul className='topnav-links'>
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
				</ul>
			</header>
			<hr />
		</>
	)
}
