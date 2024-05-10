const express = require('express')
const router = express.Router()

router.use(express.static('/public'))//not sure if needed here. it is server.js


// not done
router.get('/', (req, res) => {
	res.sendFile('./public/index.html')
})



router.post('/', (req, res) => {

})