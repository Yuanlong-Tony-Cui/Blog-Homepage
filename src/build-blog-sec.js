import React from 'react';
import './App.css';
import simulation from './assets/gen3_simulation.png';
import gelsightMount from './assets/gelsight_mount.PNG';
import armMotion from './assets/pick_and_place_webcam.png';
import updatedFydpSite from './assets/FYDP-website-v2.0.0.png';

function ImageNote() {
    return (
        <p className="Paragraph" style={{fontSize: "15px", width: "100%"}}>
            (Note: To view the full image, right click on it and open it in a new tab.)
        </p>
    );
}

function BuildBlog() {
    const styles = {
        pWeek: {lineHeight: 1.5, fontWeight: "bold"},
        pDesc: {lineHeight: 1.5, width: "100%"},
        divContent: {display: "flex", flexDirection: "column", alignItems: "top", justifyContent: "space-between", background: "white"},
        divImages: {display: "flex", alignItems: "top", justifyContent: "start", width: "100%", height: "300px"},
        img: {maxHeight: "100%", marginRight: "50px"}
    }
    return (
        <div>
            {/* Blog entries */}
            <p className="Heading">
                Build Blog
            </p>
            <br/>
            <p className="Paragraph" style={styles.pWeek}>
                Week 0
            </p>
            <div style={styles.divContent}>
                <p className="Paragraph" style={styles.pDesc}> 
                    The team had a meeting with Prof. Behrad Khamesee and Prof. Andrew Kennings.&nbsp;
                    The team presented the project plan to the professors,&nbsp;
                    updated the professors on the progress,&nbsp;
                    and asked questions regarding the deliverables and expectations in MTE482.
                </p>
            </div>
            <div style={styles.divContent}>
                <p className="Paragraph" style={styles.pDesc}> 
                    Tony worked on setting up the build blog section on top of the existing project website.
                </p>
            </div>
            <br/><br/>

            <p className="Paragraph" style={styles.pWeek}>
                Week 1
            </p>
            <div style={styles.divContent}>
                <p className="Paragraph" style={styles.pDesc}> 
                    The new FYDP web page (figure below) was launched and the link to it was submitted for review.
                </p>
                <div style={styles.divImages}>
                    <img src={updatedFydpSite} alt="Arm Motion" style={styles.img}/>
                </div>
                <ImageNote/>
            </div>
            <br/><br/>
            
            <p className="Paragraph" style={styles.pWeek}>
                Week 2
            </p>
            <div style={styles.divContent}>
                <p className="Paragraph" style={styles.pDesc}> 
                    The team had a two-hour meetup in RoboHub, set up the development environment on individual machines,&nbsp;
                    and tested the control of the Gen 3 arm using Python.
                </p>
            </div>
            <div style={styles.divContent}>
                <p className="Paragraph" style={styles.pDesc}> 
                    The team submitted the symposium request form and the form for the Capstone Design brochure.
                </p>
            </div>
            <br/><br/>

            <p className="Paragraph" style={styles.pWeek}>
                Week 3
            </p>
            <div style={styles.divContent}>
                <p className="Paragraph" style={styles.pDesc}> 
                    Each team member worked on their assigned parts of the project. Allan worked on the integration of the tactile sensor and the end effector, Ryan worked on getting the webcam to work, and Tony worked on the <a href="https://drive.google.com/file/d/1y61BVuzUauYYK_0Zg8FN1IV4vMZ8RHKo/view?usp=share_link">pick-and-place simulation</a> (figure below). A <a href="https://drive.google.com/file/d/1c7fyapQ8j-cUwrtT7m1tpWWf2IxX1dBU/view?usp=share_link">recording</a> is available that shows the live image output by the tactile sensor.
                </p>
                <div style={styles.divImages}>
                    <img src={simulation} alt="Gen3 Simulation" style={styles.img}/>
                </div>
                <ImageNote/>
            </div>
            <br/><br/>

            <p className="Paragraph" style={styles.pWeek}>
                Week 4
            </p>
            <div style={styles.divContent}>
                <p className="Paragraph" style={styles.pDesc}> 
                    The team tested what was done at that point on the Gen 3 arm in RoboHub. A <a href="https://drive.google.com/file/d/12YHL0ELYs_rpFXwDbheahid0PI5H6vlg/view?usp=share_link">video recording</a> is available that shows the integration of Ryan's and Tony's work in Week 3 and 4 (1st figure). Allan has also finished CADing the mount (2nd figure) for the tactile sensor which will replace one of the two fingers of the gripper.
                </p>
                <div style={styles.divImages}>
                    <img src={armMotion} alt="Arm Motion" style={styles.img}/>
                    <img src={gelsightMount} alt="Gelsight Mount" style={styles.img}/>
                </div>
                <ImageNote/>
                <p className="Paragraph" style={styles.pDesc}> 
                    The team had the monthly meeting on Thursday with the professors to present their existing work and discuss concerns and difficulties they had. After the meeting, the team had a discussion where individual tasks for the reading week were specified.
                </p>
            </div>
            <br/><br/>
        </div>
    );
}

export default BuildBlog;