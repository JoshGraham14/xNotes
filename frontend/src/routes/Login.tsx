import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { PasswordInput } from '../components/passwordInput/PasswordInput'
import { login, IUser } from '../auth/authFunctions'

import './css/form.css'
import LoggedInContext from '../LogginInContext'

// TODO: give the user a message when their credentials are incorrect

export const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
	const navigate = useNavigate()

	const { email, password } = formData

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		try {
			const user = await login(formData)
			setLoggedIn(true)
			navigate('/')
		} catch (error) {
			console.log('wrong login info')
		}
	}

	return (
		<div className='form-container'>
			<div className='form-wrapper'>
				<section className='form-section'>
					<h1 className='icon-title'>
						<FaSignInAlt /> Login
					</h1>
					<p className='sub-title'>
						Please enter your login information
					</p>
				</section>
				<section className='form-section form-info'>
					<form onSubmit={handleSubmit} className='auth-form'>
						<div>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								value={email}
								onChange={handleChange}
								autoFocus
							/>
						</div>
						<PasswordInput
							password={password}
							name='password'
							label='Password'
							handleChange={handleChange}
						/>
						<button type='submit' className='btn-submit'>
							Login
						</button>
					</form>
				</section>
			</div>
		</div>
	)
}
