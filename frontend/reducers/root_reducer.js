import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BookReducer from './book_reducer';
import BookshelfReducer from './bookshelf_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  books: BookReducer,
  bookshelves: BookshelfReducer
});

export default rootReducer;
