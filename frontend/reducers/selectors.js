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

export const viewShelfArray = ({ viewingShelf }) => {
  const viewShelf = Object.keys(viewingShelf).map(id => viewingShelf[id]);

  viewShelf.sort((a, b) => {
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });

  return viewShelf;
};

export const allUniqBooks = ({ allShelves }) => {
  const shelvesArr = Object.keys(allShelves).map(id => allShelves[id]);
  // return [...new Set(shelvesArr)];

  const arrayOfUniqBooks = [];
  shelvesArr.forEach( e => {
    if (!arrayOfUniqBooks.includes(e)) {
      arrayOfUniqBooks.push(e);
    }
  });

  arrayOfUniqBooks.sort((a, b) => {
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });

  return arrayOfUniqBooks;
};
