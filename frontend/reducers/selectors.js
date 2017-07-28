export const allBookTitles = ({ books }) => (
  Object.keys(books).map(id => books[id].title)
);

export const booksArray = ({ allBooks }) => (
  Object.keys(allBooks).map(id => allBooks[id])
);

export const types = ({ allShelves }) => (
  Object.keys(allShelves).map(id => allShelves[id].shelf_name)

  // uniq
);

export const shelfNameArray = (shelves) => (
  shelves.map(obj => (
    obj.shelfName
  ))
).filter(shelf => shelf !== "Default");

export const shelvingsArray = (shelvings) => (
  Object.keys(shelvings).map(id =>
    [id, shelvings[id]]
  )
);
