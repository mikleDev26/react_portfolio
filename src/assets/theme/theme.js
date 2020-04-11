import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const customTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  hueStatus: {
    danger: 'orange',
  },
});

function ThemeProvider({children}) {
  return (
    <MuiThemeProvider theme={customTheme}>
      {children}
    </MuiThemeProvider>
  )
};

export default ThemeProvider;