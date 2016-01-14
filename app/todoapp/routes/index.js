import {LoginView} from '../views/LoginView';
import React, { Component, PropTypes } from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {requireAuthentication} from '../components/AuthenticatedComponent';
import TodoApp from '../containers/TodoApp';
import ChoosePlayer from '../containers/ChoosePlayer'
import App from '../containers/App';

export default(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={ChoosePlayer} />
      <Route path="login" component={LoginView} />
      <Route path="todos" component={TodoApp} />
    </Route>
  </Router>
);
