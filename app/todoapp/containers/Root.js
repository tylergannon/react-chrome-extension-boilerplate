import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux'
import { hashHistory } from 'react-router'
// import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import routes from '../routes';

// import todos from '../reducers/todos';

// const reducer = combineReducers(Object.assign({}, todos, {
//   routing: routeReducer
// }))
import reducer from '../reducers';
const store = createStore(reducer)
// const history = createHistory()

// syncReduxAndRouter(hashHistory, store)

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
}
