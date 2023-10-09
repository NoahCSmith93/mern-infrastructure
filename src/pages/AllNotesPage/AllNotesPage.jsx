import { useState, useEffect } from 'react'
import { getNotes } from '../../utilities/notes-api'
import { isCompositeComponent } from 'react-dom/test-utils'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'

export default function AllNotesPage() {
    const  [ notes, setNotes ] = useState(null)

    useEffect(() => {
        getNotes()
            .then(res => {
                console.log('res.data', res.data)
                setNotes(res.data.notes)
            })
            .catch(err => {
                console.log(err)
            })
    })

    console.log(notes)

    return (
        <>
        <NewNoteForm />
        <h1>Notes</h1>
        <p>
            {notes ? 
                "No notes yet"
                :
                "Yep there's notes"
            }
        </p>
        </>
    )
}