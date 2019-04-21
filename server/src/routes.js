module.exports = (app) => {
	app.get('/api/ping', (req, res) => {
		res.send({
			message: 'pong'
		})
	})

	app.post('/api/register', (req, res) => {
		res.send({
			message: `${req.body.fullName} Registered Successfully`
		})
	})
}
