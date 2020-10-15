import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Young as the Morning, Old as the Sea
        </p>
        <div className="List">
        <a
          className="App-link"
          href="https://yuanlong-tony-cui.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/yuanlong-tony-cui/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/Yuanlong-Tony-Cui"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
