import React, { Component } from 'react';
import Header from './Header';
import Routes from '../../routes';
import MuiTheme from '../../components/MuiTheme';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.querySelector('#loader').style.display = 'none';
      document.querySelector('#root').style.display = 'block';
    }, 500);
  }

  render() {
    return (
      <MuiTheme>
        <Header />
        <Routes />
      </MuiTheme>
    );
  }
}

export default App;
