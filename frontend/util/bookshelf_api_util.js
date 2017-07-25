export const fetchTypeBookshelf = (bookshelfType, userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookshelves/${bookshelfType}`
  })
);

export const fetchAllBookshelves = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookshelves/`
  })
);

export const patchBookshelf = (bookId, read_status) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/books/${bookId}/bookshelves/`,
    data: { read_status }
  })
);

export const postBookshelf = (userId, bookshelfType ) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/bookshelves/`,
    data: { bookshelfType }
  })
);

export const destroyBookshelf = (bookshelfType, userId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/bookshelves/${bookshelfType}`
  })
);
