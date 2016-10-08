// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

const attributes = [{
  label: 'Status',
  name: 'status',
  status: true,
  filter: {
    all: true,
    values: [
      { label: 'Critical', value: 'critical' },
      { label: 'Warning', value: 'warning' },
      { label: 'OK', value: 'ok' },
      { label: 'Unknown', value: 'unknown' }
    ]
  }
}, {
  label: 'Name',
  name: 'name',
  sort: {
    direction: 'asc'
  }
}, {
  label: 'State',
  name: 'state',
  filter: {
    all: true,
    values: [
      { value: 'running' },
      { value: 'completed' }
    ]
  }
}, {
  label: 'Modified',
  name: 'modified',
  sort: {
    direction: 'desc',
    sections: [
      { label: 'Today', value: (new Date()).getTime() },
      { label: 'Yesterday', value: (new Date()).getTime() },
      { label: 'Earlier' }
    ]
  }
}, {
  label: 'Operating Environment',
  name: 'oe',
  filter: {
    all: true,
    values: [
      { label: 'Microsoft Windows Server 2008 R2', value: 'mws-2008-r2' },
      { label: 'Microsoft Windows Server 2008 W32', value: 'mws-2008-w32' },
      { label: 'Microsoft Windows Server 2008 x64', value: 'mws-2008-x64' },
      { label: 'Microsoft Windows Server 2012', value: 'mws-2012' },
      { label: 'Redhat Enterprise Linux 5 Server x86', value: 'rel-5-x86' },
      { label: 'Redhat Enterprise Linux 5 Server x86-64', value: 'rel-5-x86-64' },
      { label: 'Redhat Enterprise Linux 6 Server x86', value: 'rel-6-x86' },
      { label: 'Redhat Enterprise Linux 6 Server x86-64', value: 'rel-6-x86-64' },
      { label: 'Redhat Enterprise Linux 7 Server x86', value: 'rel-7-x86' },
      { label: 'Redhat Enterprise Linux 7 Server x86-64', value: 'rel-7-x86-64' },
      { label: 'Redhat Enterprise Linux 8 Server x86', value: 'rel-8-x86' },
      { label: 'Redhat Enterprise Linux 8 Server x86-64', value: 'rel-8-x86-64' },
      { label: 'SuSE Enterprise Linux 10 Server x86', value: 'suse-10-x86' },
      { label: 'SuSE Enterprise Linux 10 Server x86-64', value: 'suse-10-x86-64' },
      { label: 'SuSE Enterprise Linux 11 Server x86', value: 'suse-11-x86' },
      { label: 'SuSE Enterprise Linux 11 Server x86-64', value: 'suse-11-x86-64' },
      { label: 'SuSE Enterprise Linux 12 Server x86', value: 'suse-12-x86' },
      { label: 'SuSE Enterprise Linux 12 Server x86-64', value: 'suse-12-x86-64' }
    ]
  }
}];

export default attributes;
