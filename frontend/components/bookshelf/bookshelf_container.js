import { connect } from 'react-redux';
import Bookshelf from './bookshelf';
import { requestAllBookshelves, requestNamedBookshelf, deleteBookshelf, createBookshelf } from '../../actions/bookshelf_actions';
import { requestShelvings, requestBookShelving, createShelving, deleteShelving, updateShelving } from '../../actions/shelving_actions';
// import { types, viewShelfArray, allUniqBooks } from '../../reducers/selectors';
import { shelvingsArray } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  state,
  viewingShelf: state.bookshelves.viewingShelf,
  shelvings: shelvingsArray(state.shelvings.shelvings)
});

const mapDispatchToProps = dispatch => ({
  requestNamedBookshelf: (shelfName, userId) =>
    dispatch(requestNamedBookshelf(shelfName, userId)),
  requestShelvings: (userId, readStatus) =>
    dispatch(requestShelvings(userId, readStatus)),
  deleteShelving: (bookId, shelfId) =>
    dispatch(deleteShelving(bookId, shelfId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookshelf);
