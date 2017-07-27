export const fetchAllBookshelves = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookshelves/`
  })
);

export const fetchBookshelfByName = (shelfName, userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/bookshelves/${shelfName}`
  })
);

export const postBookshelf = (userId, shelf_name ) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/bookshelves/`,
    data: { shelf_name }
  })
);

export const destroyBookshelf = (shelfName, userId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/bookshelves/${shelfName}`
  })
);
