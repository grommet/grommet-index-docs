// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component,  PropTypes } from 'react';
import jsxToString from 'jsx-to-string';
import Box from 'grommet/components/Box';

export default class Example extends Component {

  _renderCode () {
    const { code, overrides } = this.props;
    let keyValueOverride = {};
    if (overrides) {
      overrides.forEach(override => {
        keyValueOverride[override] = `this._${override}`;
      });
    }
    return jsxToString(code, { keyValueOverride: keyValueOverride })
      .replace('null', 'undefined');
  }

  render () {
    const { code, name } = this.props;
    let heading;
    if (name) {
      heading = <h3>{name}</h3>;
    }
    return (
      <Box flex={true} pad={{horizontal: 'medium'}}>
        {heading}
        <Box pad={{ between: 'medium' }}>
          {code}
          <pre><code className="html hljs xml">
            {this._renderCode()}
          </code></pre>
        </Box>
      </Box>
    );
  }
}

Example.propTypes = {
  code: PropTypes.node.isRequired,
  name: PropTypes.string,
  overrides: PropTypes.arrayOf(PropTypes.string)
};
