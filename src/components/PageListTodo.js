import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pages} from '../state/routes';
import animations from '../styles/Animations.scss';
import {backButton} from '../utils/buttons';
import {BlockButtonAction} from './BlockButtonAction';
import {BlockIconAdd} from './BlockIconAdd';
import {BlockTodoItem} from './BlockTodoItem';
import {PageFrame} from './PageFrame';

const $PageListTodo = props =>
  <PageFrame
    pageAnimationClassName={animations.slideIn}
    controls={[
      <BlockButtonAction
        as={Link}
        icon={BlockIconAdd}
        key='add'
        to={pages.listTodoAddItem}
      />
    ]}
    title='Todo List'
    titleNavButtonProps={backButton()}
  >
    {
      props.todos.map((todo, index) =>
        <BlockTodoItem
          index={index}
          key={index}
          todo={todo}
        />
      )
    }
  </PageFrame>;

$PageListTodo.propTypes = {
  todos: PropTypes.array.isRequired
};

export const PageListTodo = connect(
  state => ({todos: state.todos})
)($PageListTodo);
