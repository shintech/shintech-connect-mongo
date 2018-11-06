## shintech/next

### Installation

    yarn install shintech-connect-mongo
    
### Usage
    
    const DB = process.env['MONGO_INITDB_DATABASE'] || 'api_development'
    const MONGO_URL = process.env['MONGO_URL'] || 'localhost'
    
    let connectionString = `mongodb://${MONGO_URL}/${DB}`
    
    const logger = require('shintech-logger')({
      environment
    })
    
    require('./shintech-mongo-connect')({
      logger,
      environment,
      connectionString
    })
    
    const db = {
      Post
    }
    
    const server = require('shintech-koa')({
      pkg,
      db,
      logger,
      router,
      environment,
      port,
      host,
      root
    }).listen(port)
