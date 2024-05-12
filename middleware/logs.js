const logs = (req, res, next) =>{
	switch (req.method){
		case 'GET':{
			console.info(`${req.method} request to ${req.path}. You're now getting things!`)
			break
		}
		case 'POST':{
			console.info(`${req.method} request to ${req.path}. You're posting things to db!`)
			break
		}
		case 'DELETE':{
			console.info(`${req.method} request to ${req.path}. Now you're deleting!`)
			break
		}
		default:
			console.log(`${req.method} request to ${req.path}. This is the default!`)
	}
	next()
}

module.exports = logs