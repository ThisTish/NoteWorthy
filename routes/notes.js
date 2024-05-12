const express = require('express')
const router = require('express').Router()
const notes = require('../db/db.json')
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const randomId = require('../helpers/random')

//todo get db data then respond with json data
router.get('/', (req, res) => res.json(notes))

working on it. selected note by id
router.get('/:id', (req, res) => {
	const noteId = req.params.id
	readFromFile('../db/db.json')
	.then((data) => JSON.parse(data))
	.then((json) =>{
		const selected = json.filter((note) => note.id === noteId)
		console.log(`selected ${selected}`)
		return selected.length > 0 ? res.json(selected) : res.json('no note to see')
	})
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