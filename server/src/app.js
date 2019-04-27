const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const chalk = require('chalk')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(
  morgan(function (tokens, req, res) {
    return (
      'METHOD: ' +
      chalk.blue(tokens.method(req, res)) +
      '   URL: ' +
      chalk.red(tokens.url(req, res)) +
      '   TIME: ' +
      chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms') +
      '   STATUS: ' +
      chalk.hex('#ffb142').bold(tokens.status(req, res))
    )
  })
)

app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync().then(() => {
  app.listen(config.port || 8081)
  console.log(`Server started on port ${config.port}`)
})
