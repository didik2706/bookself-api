const books = require('../data/books')

module.exports = (request, h) => {
  const { bookId } = request.params

  const index = books.findIndex(b => b.id === bookId)
  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan'
    }).code(404)
  } else {
    books.splice(index, 1)
    return h.response({
      status: 'success',
      message: 'Buku berhasil dihapus'
    })
  }
}
