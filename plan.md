first of firsts
	link notes page to " Get Started " btn

when notes page loads-> 
<!-- $(document).ready()=>{
	clearSvdNotes()=>{
		svdNotesArea.empty()
	}
todo	renderSvdNotes() notes for help below
	formClear()
		titleArea.empty()
		textArea.empty()
		hideBtns()=>{
			saveBtn.hide()
			clrBtn.hide()
			newBtn.hide()
		}
} -->

when titleInput.on('input', ()=>{clearBtn.show()})
	
when textInput.on('input', () =>{saveBtn.show()})
	

when saveBtn.on('click',()=>{
	<!--* formClear() made above -->
	<!--* clearSvdNotes() made above, one line might just write out in functions needed.(render) -->
		<!-- todo renderSvdNotes()marked above 
		?app.post & appendFile & app.get? 
		!in activity 19/server.js-ln30-70 -->
})

<!-- when existingNoteBtn.on('click', ()={
	newBtn.show()
	todo renderSelectedNote()-> app.get('/api/notes/:id', (req, res)=>{
		? res.json(`${req.body}`) ?
	})
}) -->

<!-- when newBtn.on('click', ()=>{
	*formClear()above in pageload
}) -->



so....

renderSelectedNote()
deleteNote()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const notes = [
	{title: this, text: is the first note}
	{title: ok, text: this is the second note}
	{title: and, text: this is the third note}
	
]


<!--* renderSvdNotes() something like this -->
app.post('/api/notes', (req, res) =>{
	console.info(`${req.method} request recived for new note)

	<!-- const { title, text } = req.body dont think i need this because of how it is written below -->

	<!-- joi validation -->
	https://joi.dev/api/
	const newID = Math.floor(Math.random()*100 +1)
	const newNote = {
		id: newID
		title: req.body.title
		text: req.body.text
	}

	const noteString = JSON.stringify(newNote)

	<!-- notes.push(note) maybe not -->
	<!-- res.send(notes) probably not -->
	console.log(notes)
	console.log(note)

	fs.appendFile('./db/db/notes.json', noteString, (err) =>{
		err ? console.error(err) : console.log(`{newNote.title} has been saved)
	})
	const response = {
		status: 'Success',
		body: "newNote"
	}
	console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review')
  }
 )



