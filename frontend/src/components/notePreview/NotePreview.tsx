import { Dispatch, SetStateAction } from 'react'
import { INote } from '../../util/data/dataFunctions'
import './notePreview.css'

interface Props {
	note: INote
	setCurrentNote: Dispatch<SetStateAction<INote>>
	highlightedNote: string
	setHighlightedNote: Dispatch<SetStateAction<string>>
}

export const NotePreview = (props: Props) => {
	const { note, setCurrentNote, highlightedNote, setHighlightedNote } = props

	const handleClick = () => {
		setCurrentNote(note)
		setHighlightedNote(note._id)
	}

	return (
		<div
			className={
				highlightedNote === note._id
					? 'note-preview highlight'
					: 'note-preview'
			}
			onClick={handleClick}
		>
			<p>{note.content}</p>
		</div>
	)
}
