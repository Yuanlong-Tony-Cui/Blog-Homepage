import React from 'react';
import profile_tony from './assets/tony.jpg';
import profile_ryan from './assets/ryan.jfif';
import profile_allan from './assets/allan.jfif';
import photo_gen3 from './assets/gen3-robot.webp';
import food from './assets/food.png';
import pic from './assets/mountains_and_seas.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="Fixed-header">
          <p className="Title">
            TRON Robotic Feeder
          </p>
          <p className="Subtitle">
            Ready to help you eat at any moment.
          </p>
        </div>
        <div style={{ height: "600px", width: "100%", marginTop: "200px", display: "flex", alignItems: "end", justifyContent: "space-around" }}>
          <div style={{width:"700px", display: "flex", alignItems: "end", justifyContent: "space-around"}}>
            <img style={{height: "100px"}} src={food} />
            <img style={{height: "500px"}} src={photo_gen3} />
          </div>
          <div style={{width:"400px", background: "white", padding: "50px", marginBottom: "30px"}}>
            <p className="Heading">Introducing</p>
            <p className="Heading">the TRON Robotic Feeder</p>
            <br/>
            <p className="Paragraph" style={{lineHeight: 1.5}}> The robotic feeder is a system designed to help people with disabilities to have meals more easily without moving their arms or upper body. </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> This system primarily comprises a robotic arm with a built-in gripper and an RGBD camera. Knowing what food the user wants through linguistic inputs, the system will then search for the target food on the table using computer vision, use a fork to skewer it, locate and then deliver the food to the user’s mouth. </p>
          </div>
        </div>
        <div style={{ height: "600px", width: "100%", background: "white"}}>
          <p className="Title">
          —— Meet Our Team ——
          </p>
          <div style={{ height: "300px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <div style={{height: "100%", width: "30%", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={profile_tony} className="App-profile" alt="Profile" />
            </div>
            <div style={{height: "100%", width: "30%", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={profile_ryan} className="App-profile" alt="Profile" />
            </div>
            <div style={{height: "100%", width: "30%", display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img src={profile_allan} className="App-profile" alt="Profile" />
            </div>
          </div>
          <div style={{ height: "20vmin", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <div style={{width:"350px"}}>
              <p className="Heading">Tony Cui</p>
              <p className="Paragraph"> Tony in his past internships has been primarily exploring web development (SaaS) and robotic control. </p>
            </div>
            <div style={{width:"350px"}}>
              <p className="Heading">Ryan Zhou</p>
              <p className="Paragraph"> Ryan is a team player that has expertise in camera-based robotics development and basic CV operations. </p>
            </div>
            <div style={{width:"350px"}}>
              <p className="Heading">Allan Zhao</p>
              <p className="Paragraph"> Allan has extensive exposure to robotics manipulation, task and motion planning, and computer vision. </p>
            </div>
          </div>
        </div>
        <div style={{ width: "75vw" }}>
          <p className="Paragraph"> More description here </p>
          <p className="Paragraph"> More description here </p>
          <p className="Paragraph"> More description here </p>
          <p className="Paragraph"> More description here </p>
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
      </div>
    </div>
  );
}

export default App;
