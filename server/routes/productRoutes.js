// getting all products
const productRoutes = (server, options, done) => {
  server.get('/', async (request, reply) => {
    const limit = 10
    const { cursor } = request.query
    const cursorObj = cursor === '' ? undefined : { id: parseInt(cursor) }

    try {
      const products = await server.pg.query(
        `SELECT * FROM products WHERE id > ${cursorObj ? cursorObj.id : 0} ORDER BY id ASC LIMIT ${limit}`)
      return reply.send({
        products: products.rows,
        nextId: products.rows.length === limit ? products.rows[products.rows.length - 1].id : undefined
      })
    } catch (error) {
      return { error: error.message }
    }
  })

  // adding a product
  server.post('/', async (request, reply) => {
    const { category, weight, image } = request.body

    try {
      const product = await server.pg.query('INSERT INTO products (category, weight, image) VALUES ($1, $2, $3) RETURNING *', [category, weight, image])
      return { status: 200 }
    } catch (error) {
      return { error: error.message }
    }
  })

  done()
}

export default productRoutes