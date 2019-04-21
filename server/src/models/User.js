module.exports = (sequelize, dataTypes) => {
	const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		full_name: {
			type: DataTypes.STRING
		},
		password: DataTypes.STRING
	})

	return User
}