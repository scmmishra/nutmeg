const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(
          '^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$'
        )
      ),
      full_name: Joi.string()
    }

    const { error, value } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password must contain the following:
			<br>
			1. At least one upper case letter
			<br>
			2. At least one lower case letter
			<br>
			3. At least one number and special character
			<br>
			4. At least 8 characters in length
			<br>
			`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid Registration Information'
          })
      }
    } else {
      next()
    }
  }
}
