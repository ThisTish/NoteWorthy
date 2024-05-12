const express = require('express')
const router = require('express').Router()
const notes = require('../db/db.json')
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const randomId = require('../helpers/random')

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




// 
// router.post('/', (req, res) => {
// 	console.log(req.body)

// 	const { title, text } = req.body

// 	if(req.body){	
// 	const newNote ={
// 		title,
// 		text,
// 		id : randomId()
// 		}

// 		readAndAppend(newNote, './db/db.json')
// 		res.json('New Note Added')
// 	}
// 	else{
// 		res.error('Error in adding note', console.error(error))
// 	}


// })

module.exports = router