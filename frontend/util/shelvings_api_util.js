export const fetchShelvings = (userId, readStatus) => (
  $.ajax({
    method: 'GET',
    url: `/api/shelvings/`,
    data: {userId, readStatus}
  })
);

export const fetchBookShelving = (bookId) => (
  $.ajax({
    method: 'GET',
    url: `/api/books/${bookId}/shelvings/1`,
  })
);

export const postShelving = (bookId, bookshelfId, readStatus ) => (
  $.ajax({
    method: 'POST',
    url: `/api/books/${bookId}/shelvings/`,
    data: { bookshelfId, readStatus }
  })
);

export const destroyShelving = (bookId, shelfId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/books/${bookId}/shelvings/${shelfId}`
  })
);

export const patchShelving = (bookId, readStatus) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/books/${bookId}/shelvings/${readStatus}`
  })
);
