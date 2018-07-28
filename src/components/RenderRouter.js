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
    <Route exact path={pages.$home} component={PageHome}/>
    <Route exact path={pages.listShopping} component={PageListShopping}/>
    <Route exact path={pages.listTodo} component={PageListTodo}/>
    <Route exact path={pages.listTodoAddItem} component={PageListTodoAddItem}/>
  </Switch>;

RenderRouter.propTypes = {
  location: PropTypes.object.isRequired
};
