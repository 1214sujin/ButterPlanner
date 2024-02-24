const express = require('express')
const app = express()
const hostname = 'localhost'
const portnumber = 3000



app.listen(portnumber, hostname, () => {
	console.log('listening on port '+portnumber)
})