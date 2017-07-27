import * as APIUtil from '../util/shelvings_api_util';

export const RECEIVE_SHELVINGS = "RECEIVE_SHELVINGS";
export const RECEIVE_BOOK_SHELVING = "RECEIVE_BOOK_SHELVING";
// export const REMOVE_BOOKSHELF = "REMOVE_BOOKSHELF";

export const receiveShelvings = shelvings => ({
  type: RECEIVE_SHELVINGS,
  shelvings
});

export const receiveBookShelving = newShelving => ({
  type: RECEIVE_BOOK_SHELVING,
  newShelving
});

export const requestShelvings = (userId, readStatus) => dispatch => {
  APIUtil.fetchShelvings(userId, readStatus).
  then(shelvings => dispatch(receiveShelvings(shelvings)));
};

export const requestBookShelving = (bookId) => dispatch => {
  APIUtil.fetchBookShelving(bookId).
  then(newShelving => dispatch(receiveBookShelving(newShelving)));
};

export const createShelving = (bookId, bookshelfId, readStatus) => dispatch => {
  APIUtil.postShelving(bookId, bookshelfId, readStatus).
  then(shelving => dispatch(receiveBookShelving(shelving)));
};

export const deleteShelving = (bookId, shelfId) => dispatch => {
  APIUtil.destroyShelving(bookId, shelfId).
  then(shelvings => dispatch(receiveShelvings(shelvings)));
};

export const updateShelving = (bookId, readStatus) => dispatch => {
  APIUtil.patchShelving(bookId, readStatus).
  then(newShelving => dispatch(receiveBookShelving(newShelving)));
};
