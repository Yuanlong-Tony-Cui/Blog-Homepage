import React from 'react';
import profile_tony from './assets/tony.jfif';
import profile_ryan from './assets/ryan.jfif';
import profile_allan from './assets/allan.jfif';
import photo_gen3 from './assets/gen3-robot.webp';
import food from './assets/food.png';
import tech_overview from './assets/technical-overview.png';
import sys_setup from './assets/system-setup.png';
import BuildBlog from './build-blog-sec';
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
        <div style={{ height: "650px", width: "100%", background: "white"}}>
          <p className="Title">
          — Meet Our Team —
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
          <div style={{ height: "200px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <div style={{width:"350px"}}>
              <p className="Heading">Tony Cui</p>
              <p className="Paragraph"> Tony in his past internships has been primarily exploring web development (SaaS) and robotic control. </p>
              <p className="Paragraph"> In this project, Tony will be working on the UI and robotic control. </p>
            </div>
            <div style={{width:"350px"}}>
              <p className="Heading">Ryan Zhou</p>
              <p className="Paragraph"> Ryan is a team player that has expertise in camera-based robotics development and basic CV operations. </p>
              <p className="Paragraph"> In this project, Ryan will be working on the perception module that uses computer vision. </p>
            </div>
            <div style={{width:"350px"}}>
              <p className="Heading">Allan Zhao</p>
              <p className="Paragraph"> Allan has extensive exposure to robotics manipulation, task and motion planning, and computer vision. </p>
              <p className="Paragraph"> In this project, Allan will be working on the robot manipulation module. </p>
            </div>
          </div>
        </div>
        {/* ISSUE: The blocks of text description overflow on low-res screens. */}
        {/* TODO: Turn down the screen resolution and ... */}
        <div style={{ height: "800px", width: "100%", marginTop: "50px", display: "flex", alignItems: "center", justifyContent: "space-around", background: "white"}}>
          <div style={{width:"400px", background: "white", padding: "50px", marginBottom: "30px"}}>
            <p className="Heading">System Setup</p>
            <br/>
            <p className="Paragraph" style={{lineHeight: 1.5}}> The robotic feeder will be fixed on one side of the table and the user will be sitting on the other side. In order for the robot to successfully deliver food to the user’s mouth, the robotic arm is required to be mounted 0.6m to 0.8m away from where the user sits. The food can be placed anywhere between the user and the robot. </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> During each cycle of the operations, the robot will: </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> 1) Identify through the camera the food that the user signals it to fetch, </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> 2) Use the end effector (mounted at the tip of the robot arm) that holds a fork to skewer the target food item, </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> 3) Locate the user’s mouth again through the camera, and </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> 4) Deliver the food to the user’s mouth. </p>
          </div>
          <div style={{width:"800px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", background: "white"}}>
            <img style={{width: "60%", margin: "auto"}} src={sys_setup} />
          </div>
        </div>
        <div style={{ height: "800px", width: "100%", marginTop: "50px", display: "flex", alignItems: "center", justifyContent: "space-around", background: "white"}}>
          <div style={{width:"800px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", background: "white"}}>
            <img style={{width: "80%"}} src={tech_overview} />
          </div>
          <div style={{width:"400px", background: "white", padding: "50px", marginBottom: "30px"}}>
            <p className="Heading">Technical Implementation</p>
            <br/>
            <p className="Paragraph" style={{lineHeight: 1.5}}> The overall robot feeder system contains two main modules: the perception module and manipulation module. </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> Initially, a user sends a natural language command to the system either by speaking or typing the name of desired food into the system.</p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> Next, the perception module scans the scene using a camera with depth information, detects every food item on the table,and stores this information for further use by the robot.</p>
            <p className="Paragraph" style={{lineHeight: 1.5}}> Given the instruction from the user and exact location of food items, the manipulation module generates the robot actions and commands that control the robot to pick and feed food into the user’s mouth.</p>
          </div>
        </div>
        <div style={{ width: "100%", marginTop: "50px", display: "flex", alignItems: "top", justifyContent: "start", background: "white"}}>
          <div style={{width:"1000px", padding: "50px"}}>
            <BuildBlog/>
          </div>
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
