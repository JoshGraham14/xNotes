import { useState, useRef } from 'react'
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa'

export const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})
	const [passwordToggle, setPasswordToggle] = useState(false)
	const [passwordToggle2, setPasswordToggle2] = useState(false)
	const passwordInput = useRef<HTMLInputElement>(null)
	const passwordInput2 = useRef<HTMLInputElement>(null)

	const { name, email, password, password2 } = formData

	const togglePassword = (e: React.MouseEvent<SVGElement>) => {
		setPasswordToggle(!passwordToggle)
	}

	const togglePassword2 = (e: React.MouseEvent<SVGElement>) => {
		setPasswordToggle2(!passwordToggle2)
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
						<FaUser /> Register
					</h1>
					<p className='sub-title'>Please register an account</p>
				</section>
				<section className='form-section form-info'>
					<form onSubmit={handleSubmit} className='auth-form'>
						<div>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								id='name'
								name='name'
								autoComplete='off'
								value={name}
								onChange={handleChange}
								autoFocus
							/>
						</div>
						<div>
							<label htmlFor='email'>Email</label>
							<input
								type='text'
								id='email'
								name='email'
								autoComplete='off'
								value={email}
								onChange={handleChange}
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
						<div>
							<label htmlFor='password2'>Confirm Password</label>
							<div className='form-input'>
								<input
									type={passwordToggle2 ? 'text' : 'password'}
									id='password2'
									name='password2'
									className='password-input'
									value={password2}
									onChange={handleChange}
									ref={passwordInput2}
								/>
								{passwordToggle2 ? (
									<FaEyeSlash
										className='form-icon show-password'
										onClick={togglePassword2}
									/>
								) : (
									<FaEye
										className='form-icon show-password'
										onClick={togglePassword2}
									/>
								)}
							</div>
						</div>

						<button type='submit' className='btn-submit'>
							Register
						</button>
					</form>
				</section>
			</div>
		</div>
	)
}
