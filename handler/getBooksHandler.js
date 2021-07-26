const books = require('../data/books')

module.exports = (request, h) => {
  const {
    name = null, reading = null, finished = null
  } = request.query

  if (books.length === 0) {
    return h.response({
      status: 'success',
      data: {
        books
      }
    }).code(404)
  } else {
    if (name !== null) {
      return h.response({
        status: 'success',
        data: {
          books: books.filter(bk => {
            return bk.name === name
          }).map(book => {
            return {
              id: book.id,
              name: book.name,
              publisher: book.publisher
            }
          })
        }
      })
    } else if (reading !== null) {
      return h.response({
        status: 'success',
        data: {
          books: books.filter(bk => {
            return bk.reading === Boolean(parseInt(reading))
          }).map(book => {
            return {
              id: book.id,
              name: book.name,
              publisher: book.publisher
            }
          })
        }
      })
    } else if (finished !== null) {
      return h.response({
        status: 'success',
        data: {
          books: books.filter(bk => {
            return bk.finished === Boolean(parseInt(finished))
          }).map(book => {
            return {
              id: book.id,
              name: book.name,
              publisher: book.publisher
            }
          })
        }
      })
    } else {
      return h.response({
        status: 'success',
        data: {
          books: books.map(book => {
            return {
              id: book.id,
              name: book.name,
              publisher: book.publisher
            }
          })
        }
      })
    }
  }
}
