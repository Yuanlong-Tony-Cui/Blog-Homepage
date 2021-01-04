import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="Title">
            BAYAN
          </p>
          <p className="Subtitle">
            Young as the Morning, Old as the Sea
          </p>
        </div>
        <img src={logo} className="App-logo" alt="logo" style={{marginTop:"50px", marginBottom:"50px"}}/>
        <div className="List">
           <button className="App-button"
           onClick={() => window.open('https://yuanlong-tony-cui.github.io/')}>
            Blog
          </button>
          <span></span>
          <button className="App-button"
          onClick={() => window.open("https://www.linkedin.com/in/yuanlong-tony-cui/")}>
            LinkedIn
          </button>
          <span></span>
          <button className="App-button"
          onClick={() => window.open("https://github.com/Yuanlong-Tony-Cui")}>
            GitHub
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
