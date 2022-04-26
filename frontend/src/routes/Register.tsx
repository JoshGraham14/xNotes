import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { PasswordInput } from '../components/passwordInput/PasswordInput'

export const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formData

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
						<PasswordInput
							password={password}
							name='password'
							label='Password'
							handleChange={handleChange}
						/>
						<PasswordInput
							password={password2}
							name='password2'
							label='Confirm password'
							handleChange={handleChange}
						/>
						<button type='submit' className='btn-submit'>
							Register
						</button>
					</form>
				</section>
			</div>
		</div>
	)
}