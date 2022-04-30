import React, { useState, useEffect, useCallback } from 'react'
import { debounce } from 'lodash'
import { getOneNote, INote, saveNote } from '../../util/data/dataFunctions'
import './note.css'

interface Props {
	noteId: string
}

export const Note = (props: Props) => {
	const { noteId } = props
	const [text, setText] = useState('')
	const [message, setMessage] = useState('')

	const debouncedSave = useCallback(
		debounce(async (text, id) => {
			setMessage('Saving ...')
			await saveNote(text, id)
			setMessage('Saved')
		}, 1000),
		[]
	)

	useEffect(() => {
		const getData = async () => {
			const data = await getOneNote(noteId)
			setText(data.content)
		}
		getData()
	}, [noteId])

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value)
		debouncedSave(e.target.value, noteId)
	}

	return (
		<div className='note'>
			<textarea onChange={handleTextChange} value={text}></textarea>
			<br />
			<p>{message}</p>
		</div>
	)
}
