import { useState } from 'react'
import { getCurrentUser, IUser } from '../util/auth/authFunctions'
import { Sidenav } from '../components/sidenav/Sidenav'
import { INote } from '../util/data/dataFunctions'

import './css/home.css'
import { Note } from '../components/note/Note'

/*
TODO: Get current selected note
Use useState to store a current note
Pass the set function down to the Sidenav component
Sidenav will display Sections and also pass the set function
into the Section components. When a note is selected, the set function
is used to updated the currently selected note in the Home route.
*/
export const Home = () => {
	const [currentNote, setCurrentNote] = useState({} as INote)
	const user: IUser = getCurrentUser()
	if (user.name === '') {
		return (
			<>
				<h1>Home</h1>
				<h2>You must log in to view/create notes</h2>
			</>
		)
	} else {
		return (
			<>
				<div className='home-container'>
					<Sidenav setCurrentNote={setCurrentNote} />
					<Note note={currentNote} />
				</div>
			</>
		)
	}
}
