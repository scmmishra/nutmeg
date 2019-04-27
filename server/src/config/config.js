module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'nutmeg',
    user: process.env.DB_USER || 'nutmeg',
    password: process.env.DB_PASS || 'nutmeg',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './nutmeg.sqlite'
    }
  }
}
