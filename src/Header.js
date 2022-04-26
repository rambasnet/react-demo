import React from 'react';
import logo from './logo.svg';

function Header() {
  return (
    <header data-testid="header" className="App-header">
      <img data-testid="logo" src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;