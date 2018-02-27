import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AccountBalance from 'material-ui-icons/AccountBalance';
import './Aside.css';

const asideItems = [
  { name: 'Affiliates', path: '/affiliates', icon: <AccountBalance /> },
  { name: 'Tiers', path: '/tiers', icon: <AccountBalance /> }
];

class Aside extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired
  };

  render() {
    const { open, closeDrawer } = this.props;

    return (
      <Drawer open={open} onClose={closeDrawer}>
        <div className="list">
          <List>
            {asideItems.map(({ name, path, icon }) => (
              <ListItem button key={name} to={path} component={Link}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    );
  }
}

export default Aside;
