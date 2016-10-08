// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import '../scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import routes from './routes';

const onRouteUpdate = () => {
  window.scrollTo(0, 0);
  document.getElementById('content').focus();
};

let historyOptions = { basename: '/docs/grommet-index' };
const history = useRouterHistory(createHistory)(historyOptions);

const element = document.getElementById('content');
ReactDOM.render(
    <Router onUpdate={onRouteUpdate} routes={routes}
    history={history} />, element);

document.body.classList.remove('loading');
