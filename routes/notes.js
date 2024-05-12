const express = require('express')
const router = require('express').Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const randomId = require('../helpers/random')
const logs = require('../middleware/logs')
// const noteAPI = require('../db/db.json')

router.use(express.static('/public'))//not sure if needed here. it is server.js
router.use(logs)

//todo get db data then respond with json data
// *right now it is only showing the homepage
router.get('/', (req, res) => {
	res.send('am i getting it yet')

	// *from mini, need to build out readFromFile
	// readFromFile('db/db.json')
	// .then((data)=>{
	// 	res.json(JSON.parse(data))
	// })
})

// working on it. selected note by id
// router.get('/:id', (req, res) => {
// 	const noteId = req.params.id
// 	readFromFile('../db/db.json')
// 	.then((data) => JSON.parse(data))
// 	.then((json) =>{
// 		const selected = json.filter((note) => note.id === noteId)
// 		console.log(`selected ${selected}`)
// 		return selected.length > 0 ? res.json(selected) : res.json('no note to see')
// 	})
// })




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