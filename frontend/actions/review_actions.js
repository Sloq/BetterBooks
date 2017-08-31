import * as APIUtil from '../util/review_api_util';

export const RECEIVE_BOOK_REVIEWS = "RECEIVE_BOOK_REVIEWS";

export const receiveBookReviews = reviews => ({
  type: RECEIVE_BOOK_REVIEWS,
  reviews
});

export const requestBookReviews = book_id => dispatch => {
  return APIUtil.fetchBookReviews(book_id).
  then(reviews => dispatch(receiveBookReviews(reviews)));
};

export const createReview = (book_id, user_id, rating, body) => dispatch => {
    APIUtil.postBookReview(book_id, user_id, rating, body).
    then(reviews => dispatch(receiveBookReviews(reviews)));
  };
