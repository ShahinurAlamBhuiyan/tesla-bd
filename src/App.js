import React, { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import HeaderBlock from './components/headerBlock/HeaderBlock';

import { BrowserRouter as Router } from 'react-router-dom';
// , Switch, Route, Redirect


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        {isMenuOpen && <Menu />}
        <HeaderBlock />
      </div>
    </Router>
  );
};

export default App;