import React from 'react';
import profile from './assets/profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="Title">
            YUANLONG TONY CUI
          </p>
          <p className="Subtitle">
            Young as the Morning, Old as the Sea
          </p>
        </div>
        <div style={{height:"25vmin", width:"25vmin", margin:"2.5vmin", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <img src={profile} className="App-profile" alt="Profile"/>
        </div>
        <div className="List" style={{marginTop:"20px", marginBottom:"45px"}}>
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
