import {
  GET_AFFILIATES,
  GET_AFFILIATES_SUCCESS,
  GET_AFFILIATES_ERROR
} from './constants';
import { fromJS } from 'immutable';

const reducerTableNames = ['affiliates', 'brands'];
const stateObj = reducerTableNames.reduce((result, name) => {
  result[name] = { isFetching: false, data: {}, error: null };
  return result;
}, {});

export const initialState = fromJS(stateObj);

export default function affiliatesReducer(state = initialState, action) {
  const fetchReducer = (state, name) =>
    state.setIn([name, 'isFetching'], true).setIn([name, 'error'], null);

  const successReducer = (state, name, payload) =>
    state
      .setIn([name, 'isFetching'], false)
      .setIn([name, 'data'], fromJS(payload));

  const errorReducer = (state, name, error) =>
    state
      .setIn([name, 'isFetching'], false)
      .setIn([name, 'error'], fromJS(error));

  switch (action.type) {
    case GET_AFFILIATES:
      return fetchReducer(state, action.reducerName);
    case GET_AFFILIATES_SUCCESS:
      return successReducer(state, action.reducerName, action.payload);
    case GET_AFFILIATES_ERROR:
      return errorReducer(state, action.reducerName, action.error);

    default:
      return state;
  }
}
