export const allBookTitles = ({ books }) =>
  Object.keys(books).map(id => books[id].title);
