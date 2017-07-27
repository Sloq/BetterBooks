import { connect } from 'react-redux';
import BookshelfSide from './bookshelf_side';
import { requestAllBookshelves,
  deleteBookshelf, createBookshelf } from '../../actions/bookshelf_actions';
import { shelfNameArray } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  shelfNames: shelfNameArray(state.bookshelves.shelfNames),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestAllBookshelves: userId =>
    dispatch(requestAllBookshelves(userId)),
  deleteBookshelf: (shelfName, userId) =>
    dispatch(deleteBookshelf(shelfName, userId)),
  createBookshelf:(userId, shelfName) =>
    dispatch(createBookshelf(userId, shelfName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookshelfSide);
