import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upperFirst, isEqual } from 'lodash';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import {
  Grid as TableGrid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import TableRow from './tableRow';
import Sorting from './Sorting';

import { changeTableProps } from '../../redux/tableActions';

class TableComponent extends Component {
  static propTypes = {
    reducerParams: PropTypes.object.isRequired,
    data: PropTypes.instanceOf(Map).isRequired,
    columns: PropTypes.instanceOf(List).isRequired
  };

  static defaultProps = {
    name: 'table',
    data: Map(),
    columns: List(),
    fetch: () => {},
    changeTableProps: () => {}
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetch(this.props);
  }

  shouldComponentUpdate(nextProps) {
    console.log(
      'shouldComponentUpdate',
      this.props,
      nextProps,
      isEqual(this.props, nextProps)
    );
    return !isEqual(this.props, nextProps);
  }

  // componentDidUpdate() {
  //   this.fetch()
  // }

  // queryString() {
  //
  // }

  fetch(props) {
    const { columns } = props.reducerParams;
    // const queryString = this.queryString();
    // if (queryString === this.lastQuery) {
    //   return;
    // }

    this.props.fetch(props.reducerParams);
    this.props.changeTableProps({ columns });
  }

  // getTableProps({ rows, columns, fetch }) {
  //   return {
  //     rows: rows.toJS(),
  //     columns: columns.toJS(),
  //     fetch,
  //   }
  // }

  getTableData(props) {
    return {
      rows: props.get('items', List()).toJS(),
      isFetching: props.get('isFetching', false),
      error: props.get('error', null)
    };
  }

  render() {
    const { reducerParams, data, columns } = this.props;
    const { rows, isFetching, error } = this.getTableData(data);
    const { reducerName: name } = reducerParams;

    if (!rows.length && isFetching) {
      return null;
    }
    console.log('renderTable', rows, columns.toJS());
    return (
      <Paper>
        <Toolbar>
          <Typography type="title">{upperFirst(name)}</Typography>
        </Toolbar>

        <TableGrid rows={rows} columns={columns.toJS()}>
          <Sorting
            name={name}
            initialSorting={List([{ columnName: 'name', direction: 'desc' }])}
            //fetch={this.fetch}
          />
          <Table rowComponent={TableRow} />
          <TableHeaderRow showSortingControls />
        </TableGrid>
      </Paper>
    );
  }
}

const mapStateToProps = (state, { reducerParams }) => {
  const { reducerName: name } = reducerParams;

  return {
    data: state.common.getIn([name, 'data'], Map()),
    columns: state.table.getIn([name, 'columns'], List())
  };
};

const mapDispatchToProps = (dispatch, { reducerParams }) => {
  const { reducerName: name } = reducerParams;

  return {
    changeTableProps: props => dispatch(changeTableProps(name, props))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
