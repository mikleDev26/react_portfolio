import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import ResumePage from './pages/resumePage/ResumePage';
import { NavBar } from './components';
import { CssBaseline } from '@material-ui/core';
import ThemeProvider from './assets/theme/theme';
import PortfolioPage from './pages/portfolio/PortfolioPage';

function App() {
  return (
    <Router>
     <>
      <CssBaseline />
      <ThemeProvider>
        <NavBar />  
        <Route exact path="/" component={HomePage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/portfolio" component={PortfolioPage} />
      </ThemeProvider>
    </>
    </Router>
  );
}

export default App;
