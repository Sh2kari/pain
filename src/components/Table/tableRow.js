import React from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';

const TableRow = ({ row, ...restProps }) => (
  <Table.Row {...restProps} onClick={() => console.log('onRowClick')} />
);

export default TableRow;
