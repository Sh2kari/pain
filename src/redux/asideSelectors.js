import { createSelector } from 'reselect';

const getAside = ({ aside }) => aside.get('open');

export const getAsideState = createSelector([getAside], open => open);
