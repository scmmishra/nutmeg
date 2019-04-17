const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const chalk = require('chalk')

const app = express()
app.use(morgan(function (tokens, req, res) {
  return 'METHOD: ' + chalk.blue(tokens.method(req, res))
    + '   URL: ' + chalk.red(tokens.url(req, res))
    + '   TIME: ' + chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms')
    + '   STATUS: ' + chalk.hex('#ffb142').bold((tokens.status(req, res)))
    // + '   USER: ' + chalk.yellow(tokens.referrer(req, res) + ' ' + tokens['remote-addr'](req, res))
}))

app.use(bodyParser.json())
app.use(cors())

app.get('/ping', (req, res) => {
	res.send({
		message: 'pong'
	})
})

app.get('/ding', (req, res) => {
	res.send({
		message: 'dong'
	})
})

app.listen(process.env.PORT || 8081)