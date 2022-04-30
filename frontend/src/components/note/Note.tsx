import React, { useState, useEffect, useCallback } from 'react'
import { debounce } from 'lodash'
import { INote, saveNote } from '../../util/data/dataFunctions'
import './note.css'

interface Props {
	note: INote
}

export const Note = (props: Props) => {
	const { note } = props
	const [text, setText] = useState('')

	const debouncedSave = useCallback(
		debounce((text, id) => saveNote(text, id), 1500),
		[]
	)

	useEffect(() => {
		setText(note.content)
	}, [note])

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value)
		debouncedSave(text, note._id)
	}

	return (
		<div className='note'>
			<textarea onChange={handleTextChange} value={text}></textarea>
		</div>
	)
}
