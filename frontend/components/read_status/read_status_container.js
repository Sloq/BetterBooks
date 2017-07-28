import { connect } from 'react-redux';
import ReadStatus from './read_status';
import { requestBookShelving,
  updateShelving, createShelving } from '../../actions/shelving_actions';
import { requestAllBookshelves } from
  '../../actions/bookshelf_actions';
import { shelfNameArray } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  state: state,
  shelfNames: state.bookshelves.shelfNames,
  currentUser: state.session.currentUser,
  readStatus: state.shelvings.currentBook.read_status,
  shelvesIn: state.shelvings.currentBook.inShelves
});

const mapDispatchToProps = dispatch => ({
  requestBookShelving: bookId =>
    dispatch(requestBookShelving(bookId)),
  updateShelving: (bookId, shelf_id, readStatus) =>
    dispatch(updateShelving(bookId, shelf_id, readStatus)),
  createShelving: (bookId, bookshelfId, readStatus) =>
    dispatch(createShelving(bookId, bookshelfId, readStatus)),
  requestAllBookshelves: userId =>
    dispatch(requestAllBookshelves(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadStatus);
