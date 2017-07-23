export const allBookTitles = ({ books }) => (
  Object.keys(books).map(id => books[id].title)
);

export const booksArray = ({ allBooks }) => (
  Object.keys(allBooks).map(id => allBooks[id])
);
