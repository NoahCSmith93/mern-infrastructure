const Note = require('../../models/note')

module.exports = {
    allNotes,
    newNote
}

async function allNotes(req, res) {
    try {
        const notes = await Note.find({user: req.user._id})
        console.log(notes)
        res.status(200).json({notes: notes})
    } catch (err) {
        res.status(400).json(err);
    }
}

async function newNote(req, res) {
    console.log('this is the req.body', req.body)
    res.status(201)
}