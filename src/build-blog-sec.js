import React from 'react';
import './App.css';

function BuildBlog() {
    return (
        <div>
            {/* Blog entries */}
            <p className="Paragraph" style={{lineHeight: 1.5, fontSize: "26px", fontWeight: 'bold'}}>
                Build Blog
            </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}>
                Week 0
            </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}>
                [Jan 19th] The team had a meeting with Prof. Behrad Khamesee and Prof. Andrew Kennings.&nbsp;
                The team presented the project plan to the professors,&nbsp;
                updated the professors on the progress,&nbsp;
                and asked questions regarding the deliverables and expectations in MTE482.
            </p>
            <p className="Paragraph" style={{lineHeight: 1.5}}>
                [Jan 20th] Tony worked on setting up the build blog section on top of the existing project website.
            </p>
        </div>
    );
}

export default BuildBlog;