import React from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import { NavBar } from './components';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />  
      <HomePage />
    </>
  );
}

export default App;
