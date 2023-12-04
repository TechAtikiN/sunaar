// default imports
import Fastify from 'fastify'
import fastifyPostgres from '@fastify/postgres'
import productRoutes from './routes/productRoutes.js'
import cors from '@fastify/cors'

const server = Fastify({
  logger: true
})

server.register(cors)

// Database connection
server.register(fastifyPostgres, {
  connectionString: 'postgres://postgres:admin@localhost:5432/sunaar'
})

// Routes
server.register(productRoutes, { prefix: '/products' })

try {
  server.listen({ port: 8000 })
} catch (error) {
  // server.log.error(error)
  process.exit(1)
}