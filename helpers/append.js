const fs = require('fs')


const appending = (destination, data)=>{
	console.log(destination, data)
	fs.writeFile(destination, JSON.stringify(data, null, 4), 'utf8', (err) =>{
		err 
		? console.log('Error appending file', err)
		: console.log('you did it')

	})
}

module.exports = appending