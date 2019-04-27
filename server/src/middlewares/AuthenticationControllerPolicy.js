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
        .alphanum()
        .min(2)
        .max(32)
        .required()
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
            error: `The password failed to match the following rules:
			<br>
			1. Must contain at least 1 upper case letter
			<br>
			2. Must contain at least 1 lower case letter
			<br>
			3. Must contain at least 1 number and special character
			<br>
			4. Must contain at least 8 characters in length
			<br>
			`
          })
          break
        case 'full_name':
          res.status(400).send({
            error: 'Your name must be atleast 3 characters long'
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
