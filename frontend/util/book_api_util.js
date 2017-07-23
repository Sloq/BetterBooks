export const fetchBook = bookId => (
  $.ajax({
    method: 'GET',
    url: `/api/books/${bookId}`,
    data: { bookId }
  })
);

export const fetchAllBooks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/books',
  })
);
