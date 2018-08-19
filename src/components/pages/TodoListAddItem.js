import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {defaultTodo, Todo} from '../../state/Todos';
import {addTodo} from '../../store/action-creators/todo';
import animations from '../../styles/Animations.scss';
import {backButton} from '../../utils/buttons';
import {InputText} from '../blocks/InputText';
import {PageFrame} from '../blocks/PageFrame';
import {Action} from '../buttons/Action';
import {Cancel} from '../icons/Cancel';

class $PageListTodoAddItem extends Component {
  state = {
    todo: defaultTodo.unlock()
  };

  addTodo = () => {
    if (this.state.todo.task.trim()) {
      this.props.addTodo(new Todo(this.state.todo));
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
          <Action
            key='add'
            onClick={this.addTodo}
          >
            Add
          </Action>
        ]}
        pageAnimationClassName={animations.slideIn}
        requestFocus={true}
        title='Add an item to do'
        titleNavButtonProps={backButton(Cancel)}
      >
        <InputText
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

export const TodoListAddItem = connect(
  null,
  {addTodo}
)($PageListTodoAddItem);
