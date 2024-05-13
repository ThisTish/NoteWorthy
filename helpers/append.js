const fs = require('fs')

// used for updating notes db
const appending = (destination, data)=>{
	fs.writeFile(destination, JSON.stringify(data, null, 4), 'utf8', (err) =>{
		err 
		? console.log('Error appending file', err)
		: console.log('Notes have been updated')
	})
}

module.exports = appending