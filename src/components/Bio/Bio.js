import React from 'react';
import './Bio.scss';

function Bio() {
    return (
        <div className="Bio">
            <div className="Bio__Title">hey</div>
            <div className="Bio__Description">
                <span className="highlight">I'm Lars. </span>
                Front-end specialist with a full-stack background, <span className="highlight">Lead engineer for <a href="https://www.kayak.com" className="highlight">Kayak.com's </a>
                Personalization UI team.</span> Deeply experienced in delivering highly-visible, performant, clean front-end code for a
                site with over 6 billion pageviews per year.  Passionate about great user experience,
                component-based architecture, and code reuse.  Occasional love-affairs with database design.
            </div>
        </div>
    );
}

export default Bio;
