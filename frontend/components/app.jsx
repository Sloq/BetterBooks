import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter }
  from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreatingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NavbarContainer from './nav/navbar_container';
import BookIndexContainer from './books/book_index_container';
import BookShowContainer from './book_show/book_show_container';
import BookshelfContainer from './all_bookshelf/bookshelf_container';

const App = () => (
  <div>
    <NavbarContainer/>
    <Route exact path='/' component={BookIndexContainer}/>
    <Route exact path='/books/:BookId' component={BookShowContainer}/>
    <Route exact path='/user/:userId/bookshelf' component={BookshelfContainer}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
