import React, { useState, useRef } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import './passwordInput.css'

interface Props {
	password: string
	name: string
	label: string
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const PasswordInput = (props: Props) => {
	const [passwordToggle, setPasswordToggle] = useState(false)
	const passwordInput = useRef<HTMLInputElement>(null)
	const { password, name, label, handleChange } = props

	const togglePassword = (e: React.MouseEvent<SVGElement>) => {
		setPasswordToggle(!passwordToggle)
	}

	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<div className='form-input'>
				<input
					type={passwordToggle ? 'text' : 'password'}
					id={name}
					name={name}
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
						className='show-password'
						onClick={togglePassword}
					/>
				) : (
					<FaEye className='show-password' onClick={togglePassword} />
				)}
			</div>
		</div>
	)
}
