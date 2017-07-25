import { connect } from 'react-redux';
import ReadStatus from './read_status';
import TypeBookshelf from './type_bookshelf';
import { requestAllBookshelves, requestTypeBookshelf, editBookshelfStatus, deleteBookshelf, createBookshelf } from '../../actions/bookshelf_actions';
import { types, viewShelfArray, allUniqBooks } from '../../reducers/selectors';

const mapStateToProps = ({bookshelves}) => ({
  types: types(bookshelves),
  givenTypeBooks: viewShelfArray(bookshelves),
  allUserBooks: allUniqBooks(bookshelves)
});

const mapDispatchToProps = dispatch => ({
  requestAllBookshelves: userId =>
    dispatch(requestAllBookshelves(userId)),
  requestTypeBookshelf: (bookshelfType, userId) =>
    dispatch(requestTypeBookshelf(bookshelfType, userId)),
  editBookshelfStatus: (bookId, readStatus) =>
    dispatch(editBookshelfStatus(bookId, readStatus)),
  deleteBookshelf: (bookshelfType, userId) =>
    dispatch(deleteBookshelf(bookshelfType, userId)),
  createBookshelf:(userId, bookshelfType) =>
    dispatch(createBookshelf(userId, bookshelfType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBookshelf);
