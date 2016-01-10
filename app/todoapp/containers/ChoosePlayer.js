import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import {Link} from 'react-router'

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)

export default class ChoosePlayer extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { todos, actions } = this.props;

    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <Link to="/todos">Blah</Link>
        {this.props.children}
      </div>
    );
  }
}
