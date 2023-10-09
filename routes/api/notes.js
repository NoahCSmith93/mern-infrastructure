const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/new', ensureLoggedIn, notesCtrl.newNote)
router.get('/', ensureLoggedIn, notesCtrl.allNotes)

module.exports = router