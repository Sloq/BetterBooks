import { connect } from 'react-redux';
import { booksArray } from '../../reducers/selectors';
import BookIndex from './book_index';
import { requestAllBooks } from '../../actions/book_actions';

const mapStateToProps = ({books}) => ({
  books: booksArray(books)
});

const mapDispatchToProps = dispatch => ({
  requestAllBooks: () => dispatch(requestAllBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookIndex);
