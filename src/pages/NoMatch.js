import React from 'react';
import Loadable from 'react-loadable';

const NoMatch = Loadable({
  loader: () => import('../components/Main/NoMatch'),
  loading: () => <div>Loading...</div>
});

export default NoMatch;
