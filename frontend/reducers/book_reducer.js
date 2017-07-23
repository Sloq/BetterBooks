import { RECEIVE_ALL_BOOKS, RECEIVE_BOOK }
  from '../actions/book_actions';
import { merge } from 'lodash';

const defaultState = {
  allBooks: {},
  focus: {}
};

const BookReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOOK:
      newState = merge({}, state);
      newState.focus = action.book;
      return newState;
    case RECEIVE_ALL_BOOKS:
      newState = merge({}, state);
      newState.allBooks = action.books;
      return newState;
    default:
      return state;
  }
};

export default BookReducer;
