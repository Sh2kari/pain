import { TOGGLE_ASIDE } from './constants';

export const toggleAside = payload => {
  return {
    type: TOGGLE_ASIDE,
    payload
  };
};
