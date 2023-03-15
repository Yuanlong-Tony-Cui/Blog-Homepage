import React from 'react';
import './App.css';
import simulation from './assets/gen3_simulation.png';
import gelsightMount from './assets/gelsight_mount.PNG';
import armMotion from './assets/pick_and_place_webcam.png';
import updatedFydpSite from './assets/FYDP-website-v2.0.0.png';
import gripperDirControl from './assets/gripper_orientation_control.png';
import fullSystemSetup from './assets/setup_w_gelsight_fork_clay.png';
import vectorField from './assets/gelsight_w_vector_field.png';
import faceLandmark from './assets/face_landmark.png';

function ImageNote() {
    return (
        <p className="Paragraph" style={{fontSize: "15px", width: "100%"}}>
            (Note: To view the full image, right click on it and open it in a new tab.)
        </p>
    );
}

function WeekSecBreak() {
    return (
        <div>
            <br/><br/>
        </div>
    );
}

function BuildBlog() {
    const styles = {
        pWeek: {lineHeight: 3, fontWeight: "bold", backgroundColor: "#cef", textAlign: "center", marginTop: "0px"},
        pDesc: {lineHeight: 1.5, width: "100%"},
        divContent: {display: "flex", flexDirection: "column", alignItems: "top", justifyContent: "space-between", background: "white", padding: "20px"},
        divWeek: {border: "solid", borderRadius: "0px", borderColor: "#cef"},
        divImages: {display: "flex", alignItems: "top", justifyContent: "center", width: "100%", height: "300px"},
        img: {maxHeight: "100%", marginRight: "50px"}
    }
    return (
        <div>
            {/* Blog entries */}
            <p className="Heading" style={{fontSize: "30px", textAlign: "center"}}>
                — Build Blog —
            </p>
            <WeekSecBreak/>

            <div style={styles.divWeek}>
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
                    <p className="Paragraph" style={styles.pDesc}> 
                        Tony worked on setting up the build blog section on top of the existing project website.
                    </p>
                </div>
            </div>
            <WeekSecBreak/>

            <div style={styles.divWeek}>
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
            </div>
            <WeekSecBreak/>
            
            <div style={styles.divWeek}>
                <p className="Paragraph" style={styles.pWeek}>
                    Week 2
                </p>
                <div style={styles.divContent}>
                    <p className="Paragraph" style={styles.pDesc}> 
                        The team had a two-hour meetup in RoboHub, set up the development environment on individual machines,&nbsp;
                        and tested the control of the Gen 3 arm using Python.
                    </p>
                    <p className="Paragraph" style={styles.pDesc}> 
                        The team submitted the symposium request form and the form for the Capstone Design brochure.
                    </p>
                </div>
            </div>
            <WeekSecBreak/>

            <div style={styles.divWeek}>
                <p className="Paragraph" style={styles.pWeek}>
                    Week 3
                </p>
                <div style={styles.divContent}>
                    <p className="Paragraph" style={styles.pDesc}> 
                        Each team member worked on their assigned parts of the project. Allan worked on the integration of the tactile sensor and the end effector, Ryan worked on getting the webcam to work, and Tony worked on the <a href="https://drive.google.com/file/d/1y61BVuzUauYYK_0Zg8FN1IV4vMZ8RHKo/view?usp=share_link">pick-and-place simulation</a> (figure below). A <a href="https://drive.google.com/file/d/1c7fyapQ8j-cUwrtT7m1tpWWf2IxX1dBU/view?usp=share_link">recording</a> is available that shows the live image output by the tactile sensor when a fork handle is pushed against its gel surface.
                    </p>
                    <div style={styles.divImages}>
                        <img src={simulation} alt="Gen3 Simulation" style={styles.img}/>
                    </div>
                    <ImageNote/>
                </div>
            </div>
            <WeekSecBreak/>

            <div style={styles.divWeek}>
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
            </div>
            <WeekSecBreak/>

            <div style={styles.divWeek}>
                <p className="Paragraph" style={styles.pWeek}>
                    Week 5
                </p>
                <div style={styles.divContent}>
                    <p className="Paragraph" style={styles.pDesc}> 
                        The team worked on more accurate control of the Gen 3 arm, such as motion planning with shortest paths, orientation control of the end effector, and more detailed motions for fetching and feeding (1st figure). The full simulated demo is included in <a href="https://drive.google.com/file/d/1Y5huULVDFVL0ek-O5C05XG5LU7AEtNsy/view?usp=share_link">this video</a>. When running the tests on Gen 3, the team set up the system using the tactile sensor, the fork, and the clay (to replace actual food) to make it closer to the real use scenarios (2nd figure).
                    </p>
                    <div style={styles.divImages}>
                        <img src={gripperDirControl} alt="Controlling gripper orientation" style={styles.img}/>
                        <img src={fullSystemSetup} alt="Complete setup" style={styles.img}/>
                    </div>
                    <ImageNote/>
                </div>
            </div>
            <WeekSecBreak/>

            <div style={styles.divWeek}>
            <p className="Paragraph" style={styles.pWeek}>
                Week 6
            </p>
                <div style={styles.divContent}>
                    <p className="Paragraph" style={styles.pDesc}> 
                        In Week 6, the team reviewed the parts that each team member worked on in the past weeks and integrated them for the March meeting with the professors. On March 9th, the demo shown to the professor include <a href="https://drive.google.com/file/d/1-sILVB_nxAXOxGFg8P5dX9z1LehCgYd4/view?usp=share_link">face landmark with depths</a> (detects the distance to the user's mounth), <a href="https://drive.google.com/file/d/1onAL_-QPMez4BVC_5m3o29S1MYlplRU5/view?usp=share_link">vector field for tactile input</a>, and high-accuracy picking and feeding. The following two figures show what the developers see when running the feeder program, and a complete <a href="https://drive.google.com/file/d/1HNOY0b7sYRrvn3bCk8yXV0s2cvJ4AUup/view?usp=share_link">demo video</a> is also available.
                    </p>
                    <div style={styles.divImages}>
                        <img src={vectorField} alt="Parsed tactile data" style={styles.img}/>
                        <img src={faceLandmark} alt="Face landmark" style={styles.img}/>
                    </div>
                    <ImageNote/>
                </div>
            </div>
        </div>
    );
}

export default BuildBlog;