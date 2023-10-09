import { useState } from 'react'
import { createNote } from '../../utilities/notes-api'

export default function NewNotePage() {

  const [ note, setNote ] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    createNote(note)
  }

  function handleChange(e) {
    setNote(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>New note: </label>
      <input type="text" name='note' value={note} onChange={handleChange} required/>
      <button type='submit'>Add Note</button>
    </form>
  );
}