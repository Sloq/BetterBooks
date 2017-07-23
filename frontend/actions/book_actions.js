import * as APIUtil from '../util/book_api_util';

export const RECEIVE_ALL_BOOKS = "RECEIVE_ALL_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";

export const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});

export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

export const requestAllBooks = () => dispatch => {
  return APIUtil.fetchAllBooks().
  then(books => dispatch(receiveAllBooks(books)));
};

export const requestBook = bookId => dispatch => {
  return APIUtil.fetchBook(bookId).
  then(book => dispatch(receiveBook(book)));
};
