import PropTypes from 'prop-types';
import React from 'react';
import {Todo} from '../state/Todos';
import {BlockCard} from './BlockCard';

export const BlockTodoItem = props =>
  <BlockCard>
    {props.todo.task}
  </BlockCard>;

BlockTodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.instanceOf(Todo).isRequired
};
