// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Filter from 'grommet-index/components/Filter';

// So Example has something useful to display
Filter.displayName = 'Filter';

export default class FilterDoc extends Component {

  constructor () {
    super();
    this._onChangeStatus = this._onChangeStatus.bind(this);
    this._onChangeType = this._onChangeType.bind(this);
    this.state = {
      statusValues: [],
      typeValues: []
    };
  }

  _onChangeStatus (values) {
    this.setState({ statusValues: values });
  }

  _onChangeType (values) {
    this.setState({ typeValues: values });
  }

  render () {
    const statusFilter = (
      <Filter name="status" label="Status" status={true}
        choices={[
          {label: 'Critical', value: 'critical'},
          {label: 'Warning', value: 'warning'},
          {label: 'OK', value: 'ok'},
          {label: 'Unknown', value: 'unknown'}
        ]}
        values={this.state.statusValues}
        onChange={this._onChangeStatus} />
    );

    const notInlineFilter = (
      <Filter name="type" label="Software Type" inline={false}
        choices={[
          {label: 'Applications', value: 'applications'},
          {label: 'BIOS', value: 'bios'},
          {label: 'Drivers', value: 'drivers'},
          {label: 'Firmware', value: 'firmware'},
          {label: 'Utility', value: 'utility'}
        ]}
        values={this.state.typeValues}
        onChange={this._onChangeType} />
    );

    const notInlineExclusiveFilter = (
      <Filter name="type" label="Software Type" inline={false} exclusive={true}
        choices={[
          {label: 'Applications', value: 'applications'},
          {label: 'BIOS', value: 'bios'},
          {label: 'Drivers', value: 'drivers'},
          {label: 'Firmware', value: 'firmware'},
          {label: 'Utility', value: 'utility'}
        ]}
        values={this.state.typeValues}
        onChange={this._onChangeType} />
    );

    const notInlineExclusiveWithScrollFilter = (
      <Filter name="type" label="Operating environment" inline={false} exclusive={true}
        choices={[
          {label: 'Asianux 4', value: 'OS1'},
          {label: 'CentOS 6', value: 'OS2'},
          {label: 'CentOS 7', value: 'OS3'},
          {label: 'Debian GNU/Linux 7.0', value: 'OS4'},
          {label: 'Microsoft Windows Server 2008 R2', value: 'OS5'},
          {label: 'Microsoft Windows Server 2012', value: 'OS6'},
          {label: 'Microsoft Windows Server 2012 Essentials', value: 'OS7'},
          {label: 'Microsoft Windows Server 2012 R2', value: 'OS8'},
          {label: 'Red Hat Enterprise Linux 6 Server (x86-64)', value: 'OS9'},
          {label: 'Red Hat Enterprise Linux 7 Server', value: 'OS10'},
          {label: 'SUSE Linux Enterprise Server 11', value: 'OS11'},
          {label: 'SUSE Linux Enterprise Server 12', value: 'OS12'},
          {label: 'Ubuntu 12.04', value: 'OS14'},
          {label: 'Ubuntu 14.04 LTS (x86-64)', value: 'OS15'},
          {label: 'Ubuntu 16.04', value: 'OS16'},
          {label: 'VMware vSphere 5.1', value: 'OS17'},
          {label: 'VMware vSphere 5.5', value: 'OS18'},
          {label: 'VMware vSphere 6.0', value: 'OS19'}
        ]}
        values={this.state.typeValues}
        onChange={this._onChangeType} />
    );

    return (
      <DocsArticle title="Filter" colorIndex="neutral-3">

        <p>Controls to turn on and off possible values for an attribute.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>choices     {"[{label: , value: }, ...]"}</code></dt>
            <dd>Array of possible values.</dd>
            <dt><code>exclusive   true|false</code></dt>
            <dd>Whether to allow selecting multiple choices. Defaults
              to <code>true</code>.</dd>
            <dt><code>inline      true|false</code></dt>
            <dd>Whether it should be collapsed. Defaults
              to <code>true</code>.</dd>
            <dt><code>label       {"{string}"}</code></dt>
            <dd>The label for the Filter.</dd>
            <dt><code>name        {"{string}"}</code></dt>
            <dd>The name of the attribute or property being filtered. This
              is used to uniquely identify the DOM elements.</dd>
            <dt><code>onChange    {"function ([{string}, ...]) {...}"}</code></dt>
            <dd>Function that will be called when the user makes a choice. It
              returns an array of values, suitable for feeding back into the
              <code>values</code> property.</dd>
            <dt><code>values      {"[{string}, ...]"}</code></dt>
            <dd>Array of currently set values.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Inline" code={statusFilter} />
          <Example name="Not Inline" code={notInlineFilter} />
          <Example name="Not Inline, exclusive" code={notInlineExclusiveFilter} />
          <Example name="Not Inline (showing scrollbar), exclusive" code={notInlineExclusiveWithScrollFilter} />
        </section>

      </DocsArticle>
    );
  }
}
