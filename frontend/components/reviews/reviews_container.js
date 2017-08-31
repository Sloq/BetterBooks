import { connect } from 'react-redux';
import Reviews from './reviews';
import { requestBookReviews, createReview } from '../../actions/review_actions';

const mapStateToProps = ({reviews, books, session}) => ({
  bookId: books.focus.id,
  reviews: reviews.bookReviews,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestBookReviews: bookId => dispatch(requestBookReviews(bookId)),
  createReview: (book_id, user_id, rating, body) => dispatch(createReview(book_id, user_id, rating, body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
