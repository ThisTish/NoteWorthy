const express = require('express')
const path = require('path')

const api = require('./routes/notes.js')	//todo not complete
const { logs } = require('./middleware/logs.js')//made but can customize more.

const PORT = process.env.PORT || 3001

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('./api', api)//routes is for the api portion. down below is the pages. i think
app.use(express.static('public'))

app.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/notes.html'))
	console.info(`${req.method} the ${(path.join(__dirname, '/public/notes.html'))}`)
})

app.get('*', (req, res) =>{
	res.sendFile(path.join(__dirname, '/public/index.html'))
	console.info(`${req.method} the ${__dirname}`)
})

app.listen(PORT, ()=> {
	console.info(`App listening at http://localhost:${PORT}`)
})