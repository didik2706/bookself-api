const { nanoid } = require('nanoid')
const books = require('../data/books')

module.exports = (request, h) => {
  const id = nanoid(16)
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading
  } = request.payload
  const insertedAt = new Date().toISOString()
  const updatedAt = new Date().toISOString()
  const finished = pageCount === readPage

  if (name === undefined) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    }).code(400)
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    }).code(400)
  }

  const data = {
    id, name, year, author, summary, publisher, pageCount, readPage, reading, finished, insertedAt, updatedAt
  }

  books.push(data)

  if (books.filter(book => book.id === id)) {
    return h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    }).code(201)
  } else {
    return h.response({
      status: 'fail',
      message: 'Buku gagal ditambahkan'
    }).code(500)
  }
}
