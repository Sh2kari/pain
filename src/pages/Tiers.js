import React from 'react';
import Loadable from 'react-loadable';
import Paper from 'material-ui/Paper';
import './index.css';

const AffiliatesPage = Loadable({
  loader: () => import('../modules/Tiers'),
  loading: () => <div>Loading...</div>
});

const Affiliates = () => (
  <Paper className="root">
    <AffiliatesPage />
  </Paper>
);

export default Affiliates;
