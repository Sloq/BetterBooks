import * as APIUtil from '../util/bookshelf_api_util';

export const RECEIVE_ALL_BOOKSHELVES = "RECEIVE_ALL_BOOKSHELVES";
export const RECEIVE_BOOKSHELF_BY_NAME = "RECEIVE_BOOKSHELF_BY_NAME";
// export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

export const receiveAllBookshelves = bookshelves => ({
  type: RECEIVE_ALL_BOOKSHELVES,
  bookshelves
});

export const receiveBookshelfByName = bookshelf => ({
  type: RECEIVE_BOOKSHELF_BY_NAME,
  bookshelf
});

export const requestAllBookshelves = userId => dispatch => {
  APIUtil.fetchAllBookshelves(userId).
  then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)));
};

export const requestNamedBookshelf = (shelfName, userId) => dispatch => {
  APIUtil.fetchBookshelfByName(shelfName, userId).
  then(bookshelf => dispatch(receiveBookshelfByName(bookshelf)));
};

export const createBookshelf = (userId, shelfName) => dispatch => {
  APIUtil.postBookshelf(userId, shelfName).
  then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)));
};

export const deleteBookshelf = (shelfName, userId) => dispatch => {
  APIUtil.destroyBookshelf(shelfName, userId).
  then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)));
};
