const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const initDB = require('./config/db')

const routes = require('./app/routes')

console.log('Application Name: ' + config.get('name'))

const app = express()

app.use(cors())

app.options('*', cors())

app.use(helmet())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

initDB.updateRelationships()

const host = config.get('server.host')
const port = config.get('server.port')

app.listen(port, host, function() {
	console.log('Server is running on port ', port)
})
