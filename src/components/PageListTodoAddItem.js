import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {defaultTodo} from '../state/Todos';
import {addTodo} from '../store/action-creators/todo';
import animations from '../styles/Animations.scss';
import {backButton} from '../utils/buttons';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockIconCancel} from './BlockIconCancel';
import {BlockInputText} from './BlockInputText';
import {PageFrame} from './PageFrame';

class $PageListTodoAddItem extends Component {
  state = {
    todo: defaultTodo.unlock()
  };

  addTodo = () => {
    if (this.state.todo.task.trim()) {
      this.props.addTodo(this.state.todo);
      this.setState({
        todo: defaultTodo.unlock()
      });
    }
    this.taskInput.focus();
  };

  setTaskInput = input => this.taskInput = input;

  updateTask = event => this.setState({
    todo: {
      ...this.state.todo,
      task: event.target.value
    }
  });

  render() {
    return (
      <PageFrame
        controls={[
          <BlockButtonAction
            key='add'
            onClick={this.addTodo}
          >
            Add
          </BlockButtonAction>
        ]}
        pageAnimationClassName={animations.slideIn}
        requestFocus={true}
        title='Add an item to do'
        titleNavButtonProps={backButton(BlockIconCancel)}
      >
        <BlockInputText
          autoFocus={true}
          onChange={this.updateTask}
          onEnter={this.addTodo}
          placeholder='Enter task'
          ref={this.setTaskInput}
          value={this.state.todo.task}
        />
      </PageFrame>
    );
  }
}

$PageListTodoAddItem.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export const PageListTodoAddItem = connect(
  null,
  {addTodo}
)($PageListTodoAddItem);
