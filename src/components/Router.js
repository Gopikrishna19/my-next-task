import PropTypes from 'prop-types';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {pages} from '../state/routes';
import {Home} from './pages/Home';
import {ShoppingList} from './pages/ShoppingList';
import {ShoppingListAddItem} from './pages/ShoppingListAddItem';
import {TodoList} from './pages/TodoList';
import {TodoListAddItem} from './pages/TodoListAddItem';

export const Router = props =>
  <Switch location={props.location}>
    <Route component={Home} exact path={pages.$home}/>
    <Route component={ShoppingList} exact path={pages.listShopping}/>
    <Route component={ShoppingListAddItem} exact path={pages.listShoppingAddItem}/>
    <Route component={TodoList} exact path={pages.listTodo}/>
    <Route component={TodoListAddItem} exact path={pages.listTodoAddItem}/>
  </Switch>;

Router.propTypes = {
  location: PropTypes.object.isRequired
};
