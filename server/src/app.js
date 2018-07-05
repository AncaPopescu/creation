console.log('Hello')
const express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

//end point to return something

app.get('/status', (req, res) => {
	res.send({
		message: "Hello World! "
	})
})

app.listen(process.env.PORT || 8081)