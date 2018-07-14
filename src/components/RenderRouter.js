import PropTypes from 'prop-types';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PageHome} from './PageHome';
import {PageListShopping} from './PageListShopping';
import {PageThemeSelect} from './PageThemeSelect';

export const RenderRouter = props =>
  <Switch location={props.location}>
    <Route exact path='/' component={PageHome}/>
    <Route exact path='/list-shopping' component={PageListShopping}/>
    <Route exact path='/theme-select' component={PageThemeSelect}/>
  </Switch>;

RenderRouter.propTypes = {
  location: PropTypes.object.isRequired
};
