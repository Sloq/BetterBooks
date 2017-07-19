import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter }
  from 'react-router-dom';
import GreatingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h1>Welcome to BetterBooks!!</h1>
      <GreatingContainer/>
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
