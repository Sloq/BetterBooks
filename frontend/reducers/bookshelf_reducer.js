import { RECEIVE_ALL_BOOKSHELVES, RECEIVE_TYPE_BOOKSHELVES } from '../actions/bookshelf_actions';
import { merge } from 'lodash';

const defaultState = {
  allShelves: {},
  viewingShelf: {}
};

const BookshelfReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BOOKSHELVES:
      newState = merge({}, state);
      newState.allShelves = action.bookshelves;
      return newState;
    case RECEIVE_TYPE_BOOKSHELVES:
      newState = merge({}, state);
      newState.viewingShelf = action.typeBookshelves;
      return newState;
    default:
      return state;
  }
};

export default BookshelfReducer;
