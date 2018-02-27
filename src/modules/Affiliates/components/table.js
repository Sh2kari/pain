import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import Table from '../../../components/Table';

import { fetchTableData } from '../../../redux/commonActions';

const reducerName = 'affiliates';
const columns = fromJS([
  { name: 'name', title: 'Name' },
  { name: 'title', title: 'Title' }
]);
const reducerParams = {
  url: 'affiliate',
  query: {},
  reducerName,
  columns
};

class Affiliates extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Table reducerParams={reducerParams} fetch={this.props.fetch} />;
  }
}

const mapStateToprops = state => ({
  affiliates: state.common.get(reducerName, Map())
});

const mapDispatchToProps = dispatch => ({
  fetch: reducerParams => dispatch(fetchTableData(reducerParams))
});

export default connect(null, mapDispatchToProps)(Affiliates);
