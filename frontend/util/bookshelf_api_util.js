export const fetchBookshelf = (bookshelfType, userId) => (
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

export const patchBookshelf = (bookId, readStatus) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/books/${bookId}/bookshelves/1`,
    data: { readStatus }
  })
);

export const postBookshelf = (userId, bookshelfType ) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/bookshelves/`,
    data: { bookshelfType }
  })
);

export const deleteBookshelf = (bookshelfType, userId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/bookshelves/${bookshelfType}`
  })
);
