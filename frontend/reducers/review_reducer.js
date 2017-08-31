import { RECEIVE_BOOK_REVIEWS } from '../actions/review_actions';
import { merge } from 'lodash';

const defaultState = {
  bookReviews: {},
};

const ReviewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOOK_REVIEWS:
      newState = merge({}, state);
      newState.bookReviews = action.reviews;
      return newState;
    default:
      return state;
  }
};

export default ReviewReducer;