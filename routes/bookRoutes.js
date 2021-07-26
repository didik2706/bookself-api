const {
  addBookHandler,
  getBooksHandler,
  getBookDetailsHandler,
  editBookHandler,
  deleteBookHandler
} = require('../handler')

module.exports = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetailsHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler
  }
]
