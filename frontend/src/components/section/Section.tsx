import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { ISection, INote, getNotes } from '../../util/data/dataFunctions'
import { IUser } from '../../util/auth/authFunctions'
import { NotePreview } from '../notePreview/NotePreview'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'

import './section.css'

interface Props {
	section: ISection
	user: IUser
	setCurrentNote: Dispatch<SetStateAction<INote>>
}

export const Section = (props: Props) => {
	const [notes, setNotes] = useState([] as INote[])
	const [activeSection, setActiveSection] = useState(false)
	const { section, user, setCurrentNote } = props

	useEffect(() => {
		const getData = async () => {
			const data = await getNotes(user, section._id)
			setNotes(data)
		}
		getData()
	}, [])

	const handleSectionClick = () => {
		setActiveSection(!activeSection)
	}

	return (
		<div className='section'>
			<div onClick={handleSectionClick} className='section-title'>
				{activeSection ? <FaAngleDown /> : <FaAngleRight />}

				<h3>{section.name}</h3>
			</div>

			{activeSection
				? notes.map(note => {
						return (
							<NotePreview
								note={note}
								key={note._id}
								setCurrentNote={setCurrentNote}
							/>
						)
				  })
				: ''}
		</div>
	)
}
