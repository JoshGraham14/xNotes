import { useState, useEffect } from 'react'
import { getCurrentUser } from '../../util/auth/authFunctions'
import { getSections, ISection } from '../../util/data/dataFunctions'
import { Section } from '../section/Section'

import './sidenav.css'

export const Sidenav = () => {
	const [sections, setSections] = useState([] as ISection[])
	const user = getCurrentUser()

	useEffect(() => {
		const getData = async () => {
			const data = await getSections(user)
			setSections(data)
		}
		getData()
	}, [])

	return (
		<div>
			<p>This is the side nav</p>
			{sections.map(item => {
				return <Section section={item} key={item._id} />
			})}
		</div>
	)
}
