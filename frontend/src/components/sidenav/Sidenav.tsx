import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { getCurrentUser } from '../../util/auth/authFunctions'
import { getSections, INote, ISection } from '../../util/data/dataFunctions'
import { Section } from '../section/Section'
import { SectionForm } from '../sectionForm/SectionForm'

import './sidenav.css'

interface Props {
	setCurrentNote: Dispatch<SetStateAction<INote>>
}

export const Sidenav = (props: Props) => {
	const [sections, setSections] = useState([] as ISection[])
	const [newSection, setNewSection] = useState(false)
	const { setCurrentNote } = props
	const user = getCurrentUser()

	useEffect(() => {
		const getData = async () => {
			const data = await getSections(user)
			setSections(data)
		}
		getData()
	}, [])

	const toggleNewSection = () => {
		setNewSection(!newSection)
	}

	return (
		<div className='sidenav'>
			{newSection ? (
				<SectionForm
					toggleNewSection={toggleNewSection}
					sections={sections}
					setSections={setSections}
					user={user}
				/>
			) : (
				<button onClick={toggleNewSection}>New Section</button>
			)}

			{sections.map(item => {
				return (
					<Section
						section={item}
						key={item._id}
						user={user}
						setCurrentNote={setCurrentNote}
					/>
				)
			})}
		</div>
	)
}
