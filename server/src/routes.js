const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./middlewares/AuthenticationControllerPolicy')

module.exports = app => {
  app.get('/api/ping', (req, res) => {
    res.send({
      message: 'pong'
    })
  })

  app.post(
    '/api/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post('/api/login', AuthenticationController.login)
}
