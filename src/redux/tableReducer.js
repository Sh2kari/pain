import { CHANGE_TABLE_PROPS } from './constants';
import { Map, fromJS } from 'immutable';

export const initialState = Map();

export default function tableReducer(state = initialState, action) {
  const { name, payload } = action;

  switch (action.type) {
    case CHANGE_TABLE_PROPS:
      return Array.isArray(name)
        ? state.setIn(name, fromJS(payload))
        : state.set(name, fromJS(payload));

    default:
      return state;
  }
}
