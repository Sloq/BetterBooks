import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter }
  from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreatingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <GreatingContainer/>
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
