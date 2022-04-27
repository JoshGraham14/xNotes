import { useContext, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { PasswordInput } from '../components/passwordInput/PasswordInput'
import { register } from '../auth/authFunctions'
import LoggedInContext from '../LogginInContext'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
	const navigate = useNavigate()

	const { name, email, password, password2 } = formData

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		try {
			const user = await register(formData)
			setLoggedIn(true)
			navigate('/')
		} catch (error) {
			console.log('You could not be registered')
		}
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
