const books = require('../data/books')

module.exports = (request, h) => {
  const { bookId } = request.params

  if (books.findIndex(d => d.id === bookId) === -1) {
    return h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan'
    }).code(404)
  } else {
    return h.response({
      status: 'success',
      data: {
        book: books.filter(book => book.id === bookId)[0]
      }
    })
  }
}
