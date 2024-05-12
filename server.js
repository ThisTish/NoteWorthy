const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

const logs = require('./middleware/logs')//made but can customize more.not called anywhere either

app.use(logs)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/api/notes', require('./routes/notes'))

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