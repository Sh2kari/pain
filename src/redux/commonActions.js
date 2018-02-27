import {
  GET_AFFILIATES,
  GET_AFFILIATES_SUCCESS,
  GET_AFFILIATES_ERROR
} from './constants';
import { RSAA } from 'redux-api-middleware';
import * as Server from '../helpers/Server';

const constRequests = name => {
  // 'affiliate': [GET_AFFILIATES, GET_AFFILIATES_SUCCESS, GET_AFFILIATES_ERROR]
  const requests = { affiliate: GET_AFFILIATES_SUCCESS };

  return requests[name];
};

export const fetchTableData = reducerParams => ({
  // [RSAA]: {
  // 	...Server.getParams('affiliate', 'GET', [GET_AFFILIATES, GET_AFFILIATES_SUCCESS, GET_AFFILIATES_ERROR])
  // }
  type: constRequests(reducerParams.url),
  payload: { items: [{ name: 1, title: 'aff1' }, { name: 2, title: 'aff2' }] },
  reducerName: reducerParams.reducerName
});
