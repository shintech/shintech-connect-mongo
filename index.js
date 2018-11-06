const mongoose = require('mongoose')

module.exports = ({ logger, environment, connectionString }) => {
  mongoose.connect(connectionString, { useNewUrlParser: true }, function (err, connection) {
    if (err) {
      logger.error('Error: ' + err)
    } else {
      if (environment === 'development') { logger.info('Connected to database: ' + connectionString) }
    }

    connection.on('close', () => {
      logger.warn('Closing mongodb connection...')
    })
  })
}
