import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import aside from './asideReducer';
import common from './commonReducer';
import table from './tableReducer';

export default combineReducers({
  routing: routerReducer,
  aside,
  common,
  table
});
