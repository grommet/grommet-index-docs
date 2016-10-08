// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import NavAnchor from './NavAnchor';

export default class DocsMenu extends Component {

  _renderAnchor (to, label) {
    return (
      <NavAnchor path={to} onClick={this.props.onClick}>{label}</NavAnchor>
    );
  }

  render () {
    return (
      <Menu direction={this.props.direction} align="start" justify="between"
        primary={true}>
        <Box key={content.label} pad={{horizontal: 'medium'}}>
          <Heading tag="h3" strong={true}>Components</Heading>
        </Box>
        {this._renderAnchor("/aggregate", "Aggregate")}
        {this._renderAnchor("/filter", "Filter")}
        {this._renderAnchor("/filters", "Filters")}
        {this._renderAnchor("/header", "Header")}
        {this._renderAnchor("/history", "History")}
        {this._renderAnchor("/index", "Index")}
        {this._renderAnchor("/list", "List")}
        {this._renderAnchor("/sort", "Sort")}
        {this._renderAnchor("/table", "Table")}
        {this._renderAnchor("/tiles", "Tiles")}

        <Box key={content.label} pad={{horizontal: 'medium'}}>
          <Heading tag="h3" strong={true}>Utilities</Heading>
        </Box>
        {this._renderAnchor("/query", "Query")}
      </Menu>
    );
  }
}

DocsMenu.propTypes = {
  onClick: PropTypes.func
};
