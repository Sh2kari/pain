import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
// import lightBlue from 'material-ui/colors/lightBlue';

const theme = createMuiTheme({
  // palette: {
  // 	primary: lightBlue,
  // },
});

const muiTheme = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default muiTheme;
