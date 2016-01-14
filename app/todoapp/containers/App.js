import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

// @connect((state) => {
//     return {
//      isAuthenticated: state.auth.isAuthenticated
//     };
// })
export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
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
