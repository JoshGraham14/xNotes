import React, { Dispatch, SetStateAction, useState } from 'react'
import { IUser } from '../../util/auth/authFunctions'
import { ISection, createSection } from '../../util/data/dataFunctions'
import './sectionForm.css'

interface Props {
	toggleNewSection: () => void
	sections: ISection[]
	setSections: Dispatch<SetStateAction<ISection[]>>
	user: IUser
}

export const SectionForm = (props: Props) => {
	const { toggleNewSection, sections, setSections, user } = props
	const [sectionName, setSectionName] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSectionName(e.target.value)
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		try {
			const section = await createSection(user, sectionName)
			setSections([...sections, section])
			toggleNewSection()
		} catch (error: any) {
			throw new Error(error.message)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' onChange={handleChange} />
			<button onClick={toggleNewSection}>X</button>
			<input type='submit' value='Confirm' />
		</form>
	)
}
