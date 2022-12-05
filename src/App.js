import React from 'react';
import profile_tony from './assets/tony.jpg';
import profile_ryan from './assets/ryan.jfif';
import profile_allan from './assets/allan.jfif';
import photo_gen3 from './assets/gen3-robot.webp';
import pic from './assets/mountains_and_seas.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Fixed-header">
          <p className="Title">
            Robotic Feeder
          </p>
          <p className="Subtitle">
            Ready to help you eat at any moment.
          </p>
        </div>
        <div style={{ height: "30vmin", width: "30vmin", margin: "2.5vmin", marginTop: "30vmin", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <img style={{height: "500px"}} src={photo_gen3} class-Name="App-photo" />
        </div>
        <div style={{ height: "3vmin", width: "30vmin", margin: "2.5vmin", marginTop: "15vmin"}}>
          <p className="Subtitle" style={{fontWeight: "bold", fontSize: "80%", background: "#66ccff"}}>
              Meet Our Team
          </p>
        </div>
        <div style={{ height: "50vmin", width: "100%", margin: "2.5vmin", background: "white"}}>
          <div style={{ height: "30vmin", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <div style={{height: "30vmin", width: "30%", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={profile_tony} className="App-profile" alt="Profile" />
            </div>
            <div style={{height: "30vmin", width: "30%", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={profile_ryan} className="App-profile" alt="Profile" />
            </div>
            <div style={{height: "30vmin", width: "30%", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={profile_allan} className="App-profile" alt="Profile" />
            </div>
          </div>
          <div style={{ height: "20vmin", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <div style={{width:"300px"}}>
              <p className="Subtitle" style={{fontWeight: "bold", fontSize: "60%"}}>Tony Cui</p>
              <p className="Subtitle"> Tony in his past internships has been exploring the web and robotics industries. </p>
            </div>
            <div style={{width:"300px"}}>
              <p className="Subtitle" style={{fontWeight: "bold", fontSize: "60%"}}>Ryan Zhou</p>
              <p className="Subtitle"> Ryan is a team player that has expertise in camera-based robotics development and basic CV operations. </p>
            </div>
            <div style={{width:"300px"}}>
              <p className="Subtitle" style={{fontWeight: "bold", fontSize: "60%"}}>Allan Zhao</p>
              <p className="Subtitle"> Allan has extensive exposure to robotics manipulation, task and motion planning, and computer vision. </p>
            </div>
          </div>
        </div>
        <div style={{ width: "75vw" }}>
          <p className="paragraph">The Robotic Feeder is a project built ...</p>
          <p className="paragraph"> More description here </p>
          <p>-</p>
          <p>-</p>
          <p>-</p>
        </div>
        {/* <div className="List" style={{ marginTop: "20px", marginBottom: "45px" }}>
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
        </div> */}
        <div className="PortfolioContainer">
          {/* <img src={pic} alt="PictureMissing" className="PortfolioItem"/> */}
        </div>
      </header>
    </div>
  );
}

export default App;
