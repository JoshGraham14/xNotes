import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { getCurrentUser } from '../../util/auth/authFunctions'
import { getSections, INote, ISection } from '../../util/data/dataFunctions'
import { Section } from '../section/Section'

import './sidenav.css'

interface Props {
	setCurrentNote: Dispatch<SetStateAction<INote>>
}

export const Sidenav = (props: Props) => {
	const [sections, setSections] = useState([] as ISection[])
	const { setCurrentNote } = props
	const user = getCurrentUser()

	useEffect(() => {
		const getData = async () => {
			const data = await getSections(user)
			setSections(data)
		}
		getData()
	}, [])

	return (
		<div className='sidenav'>
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
