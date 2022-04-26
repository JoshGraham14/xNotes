import { useState, useRef } from 'react'
import { FaSignInAlt, FaEye, FaEyeSlash } from 'react-icons/fa'

import './css/form.css'

export const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const [passwordToggle, setPasswordToggle] = useState(false)
	const passwordInput = useRef<HTMLInputElement>(null)
	const { email, password } = formData

	const togglePassword = (e: React.MouseEvent<SVGElement>) => {
		setPasswordToggle(!passwordToggle)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault()
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
						<div>
							<label htmlFor='password'>Password</label>
							<div className='form-input'>
								<input
									type={passwordToggle ? 'text' : 'password'}
									id='password'
									name='password'
									className='password-input'
									value={password}
									onChange={handleChange}
									ref={passwordInput}
									onFocus={e =>
										e.currentTarget.setSelectionRange(
											e.currentTarget.value.length,
											e.currentTarget.value.length
										)
									}
								/>
								{passwordToggle ? (
									<FaEyeSlash
										className='form-icon show-password'
										onClick={togglePassword}
									/>
								) : (
									<FaEye
										className='form-icon show-password'
										onClick={togglePassword}
									/>
								)}
							</div>
						</div>
						<button type='submit' className='btn-submit'>
							Login
						</button>
					</form>
				</section>
			</div>
		</div>
	)
}
