import { TOGGLE_ASIDE } from './constants';
import { Map } from 'immutable';

export const initialState = Map({ open: false });

export default function commonReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case TOGGLE_ASIDE:
      return state.set('open', payload);
    default:
      return state;
  }
}
