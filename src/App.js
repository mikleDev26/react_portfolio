import React from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import { NavBar } from './components';
import { CssBaseline } from '@material-ui/core';
import ThemeProvider from './assets/theme/theme';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <NavBar />  
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
