const fs = require('fs')
const router = require('express').Router()
const notes = require('../db/db.json')
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const randomId = require('../helpers/random')
const appending = require('../helpers/append')

//get db data then respond with json data
router.get('/', (req, res) => res.json(notes))

//get a note by id
router.get('/:id', (req, res) => {
	try{
		const noteId = req.params.id
		const selectedNote =  notes.find(note => note.id == noteId)
		if(selectedNote){
			const { title, text } = selectedNote
			res.json(`${title} & ${text}`)
		}else{
			res.json(`Note ${noteId} cannot be found.`)
		}
	}catch(err){
		console.error('Error', err)
		res.status(404).json(err)
	}
})
// todo post new note to database and return new note
router.post('/', (req, res) => {
	// console.log(req.body)

	const { title, text } = req.body
	const newNote ={
		title,
		text,
		id : randomId()
	}
	// console.log(newNote)
	if(!req.body){
		res.error('Missing essential info', console.error(error))
	}else{
		notes.push(newNote)
		console.log(notes)
		appending('./db/db.json', notes)
		res.json(notes)
	}


})

module.exports = router