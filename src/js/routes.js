// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Docs from './components/Docs';
import Home from './components/Home';
import AggregateDoc from './components/AggregateDoc';
import FilterDoc from './components/FilterDoc';
import FiltersDoc from './components/FiltersDoc';
import HeaderDoc from './components/HeaderDoc';
import HistoryDoc from './components/HistoryDoc';
import IndexDoc from './components/IndexDoc';
import ListDoc from './components/ListDoc';
import QueryDoc from './components/QueryDoc';
import SortDoc from './components/SortDoc';
import TableDoc from './components/TableDoc';
import TilesDoc from './components/TilesDoc';

export default (
  <Route path="/" component={Docs}>
    <IndexRoute component={Home} />
    <Route path='aggregate' component={AggregateDoc} />
    <Route path='filter' component={FilterDoc} />
    <Route path='filters' component={FiltersDoc} />
    <Route path='header' component={HeaderDoc} />
    <Route path='history' component={HistoryDoc} />
    <Route path='index' component={IndexDoc} />
    <Route path='list' component={ListDoc} />
    <Route path='query' component={QueryDoc} />
    <Route path='sort' component={SortDoc} />
    <Route path='table' component={TableDoc} />
    <Route path='tiles' component={TilesDoc} />
  </Route>
);
