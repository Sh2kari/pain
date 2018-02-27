import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { SortingState } from '@devexpress/dx-react-grid';
import { changeTableProps } from '../../redux/tableActions';

import { connect } from 'react-redux';

const Sorting = ({ sorting, onSortingChange }) => (
  <SortingState sorting={sorting.toJS()} onSortingChange={onSortingChange} />
);

Sorting.propTypes = {
  name: PropTypes.string.isRequired,
  sorting: PropTypes.instanceOf(List).isRequired,
  onSortingChange: PropTypes.func.isRequired
};

const mapSortingStateToProps = (state, { name, initialSorting }) => ({
  sorting: state.table.getIn([name, 'sorting'], initialSorting)
});

const mapSortingDispatchToProps = (dispatch, { name }) => ({
  onSortingChange: sorting =>
    dispatch(changeTableProps([name, 'sorting'], sorting))
});

export default connect(mapSortingStateToProps, mapSortingDispatchToProps)(
  Sorting
);
