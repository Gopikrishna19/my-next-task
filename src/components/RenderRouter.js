import PropTypes from 'prop-types';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {pages} from '../state/routes';
import {PageHome} from './PageHome';
import {PageListShopping} from './PageListShopping';
import {PageListTodo} from './PageListTodo';
import {PageListTodoAddItem} from './PageListTodoAddItem';

export const RenderRouter = props =>
  <Switch location={props.location}>
    <Route component={PageHome} exact path={pages.$home}/>
    <Route component={PageListShopping} exact path={pages.listShopping}/>
    <Route component={PageListTodo} exact path={pages.listTodo}/>
    <Route component={PageListTodoAddItem} exact path={pages.listTodoAddItem}/>
  </Switch>;

RenderRouter.propTypes = {
  location: PropTypes.object.isRequired
};
