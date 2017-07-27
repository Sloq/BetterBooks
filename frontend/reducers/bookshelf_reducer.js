import { RECEIVE_ALL_BOOKSHELVES, RECEIVE_BOOKSHELF_BY_NAME } from '../actions/bookshelf_actions';
import { merge } from 'lodash';

const defaultState = {
  shelfNames: [],
  viewingShelf: {}
};

const BookshelfReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BOOKSHELVES:
      newState = merge({}, state);
      newState.shelfNames = action.bookshelves;
      return newState;
    case RECEIVE_BOOKSHELF_BY_NAME:
      newState = merge({}, state);
      newState.viewingShelf = action.bookshelf;
      return newState;
    default:
      return state;
  }
};

export default BookshelfReducer;
