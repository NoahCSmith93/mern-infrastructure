import sendRequest from './send-request';
import axios from 'axios'
import { getToken } from './users-service';
const BASE_URL = '/api/notes';

export function getNotes() {
    return axios(`http://localhost:3001/api/notes`)
}

export function createNote(note) {
    const token = getToken()
    return axios({
        url: `http://localhost:3001/api/notes/new`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${token}`
        },
        data: {note: note}
    })
}