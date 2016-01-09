import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import ChoosePlayer from './ChoosePlayer'

import { createStore, combineReducers } from 'redux'
import { Router, Route } from 'react-router'
import { browserHistory } from 'react-router'
// import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'

import todos from '../reducers/todos';

const reducer = combineReducers(Object.assign({}, todos, {
  routing: routeReducer
}))
const store = createStore(reducer)
// const history = createHistory()

syncReduxAndRouter(browserHistory, store)

class AppContainer extends Component {
  render() {
    return (
      <div>
        <TodoApp />
        {
          (() => {
            if (process.env.DEVTOOLS) {
              const DevTools = require('./DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={AppContainer}>
            <Route path="todos" component={ChoosePlayer} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
