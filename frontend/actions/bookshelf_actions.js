import * as APIUtil from '../util/bookshelf_api_util';

export const RECEIVE_ALL_BOOKSHELVES = "RECEIVE_ALL_BOOKSHELVES";
export const RECEIVE_TYPE_BOOKSHELVES = "RECEIVE_TYPE_BOOKSHELVES";
// export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

export const receiveAllBookshelves = bookshelves => ({
  type: RECEIVE_ALL_BOOKSHELVES,
  bookshelves
});

export const receiveTypeBookshelves = typeBookshelves => ({
  type: RECEIVE_TYPE_BOOKSHELVES,
  typeBookshelves
});

export const requestAllBookshelves = userId => dispatch => {
  APIUtil.fetchAllBookshelves(userId).
  then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)));
};

export const requestTypeBookshelf = (bookshelfType, userId) => dispatch => {
  APIUtil.fetchTypeBookshelf(bookshelfType, userId).
  then(typeBookshelves => dispatch(receiveTypeBookshelves(typeBookshelves)));
};

export const editBookshelfStatus = (bookId, readStatus) => dispatch => {
  APIUtil.patchBookshelf(bookId, readStatus).
  then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)));
};

export const deleteBookshelf = (bookshelfType, userId) => dispatch => {
  APIUtil.destroyBookshelf(bookshelfType).
  then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)));
};

export const createBookshelf = (userId, bookshelfType) => dispatch => {
  APIUtil.postBookshelf(userId, bookshelfType).
  then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)));
};
