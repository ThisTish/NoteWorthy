// const express = require('express')
const router = require('express').Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const randomId = require('../helpers/random')

router.use(express.static('/public'))//not sure if needed here. it is server.js


// not done
router.get('/', (req, res) => {
	res.readFromFile('../db/db.json').then((data)=>{
		res.json(JSON.parse(data))
	})
})



router.post('/', (req, res) => {
	console.log(req.body)

	const { title, text } = req.body

	const newNote ={
		title,
		text,
		id : randomId()
	}

	
})