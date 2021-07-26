const books = require('../data/books')

module.exports = (request, h) => {
  const { bookId } = request.params
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading
  } = request.payload
  const finished = pageCount === readPage
  const updatedAt = new Date().toISOString()

  if (name === undefined) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku'
    }).code(400)
  }

  if (readPage >= pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
    }).code(400)
  }

  if (books.findIndex(b => b.id === bookId) === -1) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan'
    }).code(404)
  }

  const index = books.findIndex(book => book.id === bookId)

  if (index === -1) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan'
    }).code(404)
  } else {
    books[index] = {
      id: bookId, name, year, author, summary, publisher, pageCount, readPage, finished, reading, updatedAt, insertedAt: books[index].insertedAt
    }

    return h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui'
    })
  }
}
