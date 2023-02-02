import React from 'react';
import './App.css';

function BuildBlog() {
    return (
        <div>
            {/* Blog entries */}
            <p className="Heading">
                Build Blog
            </p>
            <br/>
            <p className="Paragraph" style={{lineHeight: 1.5, fontWeight: "bold"}}>
                Week 0
            </p>
            <div style={{display: "flex", alignItems: "top", justifyContent: "space-between", background: "white"}}>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "100px"}}> 
                    [Jan 19]
                </p>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "800px"}}> 
                    The team had a meeting with Prof. Behrad Khamesee and Prof. Andrew Kennings.&nbsp;
                    The team presented the project plan to the professors,&nbsp;
                    updated the professors on the progress,&nbsp;
                    and asked questions regarding the deliverables and expectations in MTE482.
                </p>
            </div>
            <div style={{display: "flex", alignItems: "top", justifyContent: "space-between", background: "white"}}>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "100px"}}> 
                    [Jan 20]
                </p>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "800px"}}> 
                    Tony worked on setting up the build blog section on top of the existing project website.
                </p>
            </div>
            <br/><br/>

            <p className="Paragraph" style={{lineHeight: 1.5, fontWeight: "bold"}}>
                Week 1
            </p>
            <div style={{display: "flex", alignItems: "top", justifyContent: "space-between", background: "white"}}>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "100px"}}> 
                    [Jan 26]
                </p>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "800px"}}> 
                    The new FYDP web page was launched and the link to it was submitted for review.
                </p>
            </div>
            <br/><br/>
            
            <p className="Paragraph" style={{lineHeight: 1.5, fontWeight: "bold"}}>
                Week 2
            </p>
            <div style={{display: "flex", alignItems: "top", justifyContent: "space-between", background: "white"}}>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "100px"}}> 
                    [Feb 1]
                </p>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "800px"}}> 
                    The team had a two-hour meetup in RoboHub, set up the development environment on individual machines,&nbsp;
                    and tested the control of the Gen 3 arm using Python.
                </p>
            </div>
            <div style={{display: "flex", alignItems: "top", justifyContent: "space-between", background: "white"}}>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "100px"}}> 
                    [Feb 2]
                </p>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "800px"}}> 
                    The team submitted the symposium request form and the form for the Capstone Design brochure.
                </p>
            </div>
        </div>
    );
}

export default BuildBlog;