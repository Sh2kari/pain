import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import Aside from './Aside';
import './Header.css';

import { getAsideState } from '../../redux/asideSelectors';
import { toggleAside } from '../../redux/asideAction';

class Header extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.open !== nextProps.open;
  }

  openDrawer() {
    this.props.toggleAside(true);
  }

  closeDrawer() {
    this.props.toggleAside(false);
  }

  render() {
    const { open } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="default"
            aria-label="Menu"
            onClick={this.openDrawer}
          >
            <MenuIcon open={open} />
          </IconButton>

          <Aside open={open} closeDrawer={this.closeDrawer} />

          <Typography type="title" color="inherit" className="flex">
            Admin
          </Typography>

          <Button color="default">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default connect(
  state => ({ open: getAsideState(state) }),
  dispatch => ({ toggleAside: open => dispatch(toggleAside(open)) })
)(Header);
