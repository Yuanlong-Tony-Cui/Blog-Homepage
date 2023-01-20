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
                <p className="Paragraph" style={{lineHeight: 1.5, width: "10%"}}> 
                    [Jan 19th]
                </p>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "87.5%"}}> 
                    The team had a meeting with Prof. Behrad Khamesee and Prof. Andrew Kennings.&nbsp;
                    The team presented the project plan to the professors,&nbsp;
                    updated the professors on the progress,&nbsp;
                    and asked questions regarding the deliverables and expectations in MTE482.
                </p>
            </div>
            <div style={{display: "flex", alignItems: "top", justifyContent: "space-between", background: "white"}}>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "10%"}}> 
                    [Jan 20th]
                </p>
                <p className="Paragraph" style={{lineHeight: 1.5, width: "87.5%"}}> 
                    Tony worked on setting up the build blog section on top of the existing project website.
                </p>
            </div>
        </div>
    );
}

export default BuildBlog;