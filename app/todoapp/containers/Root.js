import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';

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
        <AppContainer />
      </Provider>
    );
  }
}
