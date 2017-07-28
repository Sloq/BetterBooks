export const allBookTitles = ({ books }) => {
  const booksArr = Object.keys(books).map(id => books[id].title);
  return (booksArr.sort());
};

export const booksArray = ({ allBooks }) => {
  const booksArr = Object.keys(allBooks).map(id => allBooks[id]);
  booksArr.sort(function(a, b){
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
  return booksArr;
};

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
