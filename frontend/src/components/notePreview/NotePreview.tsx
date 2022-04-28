import { Dispatch, SetStateAction } from 'react'
import { INote } from '../../util/data/dataFunctions'
import './notePreview.css'

interface Props {
	note: INote
	setCurrentNote: Dispatch<SetStateAction<INote>>
}

export const NotePreview = (props: Props) => {
	const { note, setCurrentNote } = props

	const handleClick = () => {
		setCurrentNote(note)
	}

	return (
		<div className='note-preview' onClick={handleClick}>
			<p>{note.content}</p>
		</div>
	)
}
