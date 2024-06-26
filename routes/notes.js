const router = require('express').Router()
const notes = require('../db/db.json')
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

//  post new note to database and return new note
router.post('/', (req, res) => {
	const { title, text } = req.body
	const newNote ={
		title,
		text,
		id : randomId()
	}
	if(!req.body){
		res.error('Missing essential info', console.error(error))
	}else{
		notes.push(newNote)
		appending('./db/db.json', notes)
		res.json(notes)
	}
})

// deleting a certain note
router.delete('/:id', (req, res) => {
	try{
		const noteId = req.params.id
		const trashNote =  notes.find(note => note.id == noteId)
		if(trashNote){
			const aliveNotes = notes.filter(note => note.id !== parseInt(req.params.id))
			appending('./db/db.json', aliveNotes)
			res.json({
				msg: 'Note Deleted',
				aliveNotes				
			})
		}else{
			res.json(`Note ${noteId} cannot be found.`)
		}
	}catch(err){
		console.error('Error', err)
		res.status(404).json(err)
	}
})



module.exports = router