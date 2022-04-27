import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { PasswordInput } from '../components/passwordInput/PasswordInput'
import { login, IUser } from '../auth/authFunctions'

import './css/form.css'

export const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
		login(formData)
		const user: IUser = JSON.parse(localStorage.getItem('user') || '{}')
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
