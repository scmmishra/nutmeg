const bcrypt = require('bcrypt')

function hashPassword (user, options) {
  const SALT_FACTOR = 10
  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .hash(user.password, SALT_FACTOR)
    .then(hash => {
      user.password = hash
    })
    .catch(err => {
      throw new Error()
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      fullName: {
        type: DataTypes.STRING
      },
      password: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword
      }
    }
  )

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
  }

  return User
}
