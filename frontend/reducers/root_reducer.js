import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BookReducer from './book_reducer';
import BookshelfReducer from './bookshelf_reducer';
import ShelvingReducer from './shelving_reducer';
import ReviewReducer from './review_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  books: BookReducer,
  bookshelves: BookshelfReducer,
  shelvings: ShelvingReducer,
  reviews: ReviewReducer
});

export default rootReducer;
