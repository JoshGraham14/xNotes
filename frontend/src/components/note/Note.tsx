import { INote } from '../../util/data/dataFunctions'
import './note.css'

interface Props {
	note: INote
}

export const Note = (props: Props) => {
	const { note } = props

	return (
		<div className='note'>
			<p>{note.content}</p>
		</div>
	)
}
