import { connect } from 'react-redux';
import BookShow from './book_show';
import { requestBook } from '../../actions/book_actions';

const mapStateToProps = state => ({
  book: state.books.focus
});

const mapDispatchToProps = dispatch => ({
  requestBook: (id) => dispatch(requestBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
