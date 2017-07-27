import { RECEIVE_SHELVINGS, RECEIVE_BOOK_SHELVING } from '../actions/shelving_actions';
import { merge } from 'lodash';

const defaultState = {
  currentBook: {},
  shelvings: {}
};

const ShelvingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SHELVINGS:
      newState = merge({}, state);
      newState.shelvings = action.shelvings;
      return newState;
    case RECEIVE_BOOK_SHELVING:
      newState = merge({}, state);
      newState.currentBook = action.newShelving;
      return newState;
    default:
      return state;
  }
};

export default ShelvingReducer;
