const Hapi = require('@hapi/hapi')
const bookRoutes = require('./routes/bookRoutes')

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 7000,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(bookRoutes)

  await server.start()
  console.log(`Server running at port ${server.info.uri}`)
}

init()
