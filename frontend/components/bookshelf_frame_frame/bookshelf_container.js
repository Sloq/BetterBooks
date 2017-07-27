import { connect } from 'react-redux';
import AllBookshelf from './all_bookshelf';
import { requestAllBookshelves, requestNamedBookshelf, deleteBookshelf, createBookshelf } from '../../actions/bookshelf_actions';
import { requestShelvings, requestBookShelving, createShelving, deleteShelving, updateShelving } from '../../actions/shelving_actions';
// import { types, viewShelfArray, allUniqBooks } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  shelfNames: state.bookshelves.shelfNames,
  viewingShelf: state.bookshelves.viewingShelf,
  currentBook: state.shelvings.currentBook,
  shelvings: state.shelvings.shelvings
});

const mapDispatchToProps = dispatch => ({
  requestAllBookshelves: userId =>
    dispatch(requestAllBookshelves(userId)),
  requestNamedBookshelf: (shelfName, userId) =>
    dispatch(requestNamedBookshelf(shelfName, userId)),
  deleteBookshelf: (shelfName, userId) =>
    dispatch(deleteBookshelf(shelfName, userId)),
  createBookshelf:(userId, shelfName) =>
    dispatch(createBookshelf(userId, shelfName)),

  requestShelvings: (userId, readStatus) =>
    dispatch(requestShelvings(userId, readStatus)),
  requestBookShelving: (bookId) =>
    dispatch(requestBookShelving(bookId)),
  createShelving: (bookId, bookshelfId, readStatus) =>
    dispatch(createShelving(bookId, bookshelfId, readStatus)),
  deleteShelving: (bookId, shelfId) =>
    dispatch(deleteShelving(bookId, shelfId)),
  updateShelving: (bookId, readStatus) =>
    dispatch(updateShelving(bookId, readStatus))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBookshelf);
