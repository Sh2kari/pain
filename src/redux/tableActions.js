import { CHANGE_TABLE_PROPS } from './constants';

export const changeTableProps = (name, payload) => {
  return {
    type: CHANGE_TABLE_PROPS,
    payload,
    name
  };
};
