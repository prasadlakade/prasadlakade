import React from 'react';

import './aboutme.styles.css';

const AboutMe = () => {
return(
<div className="aboutme-wrapper common-wrapper">
    <div className="aboutme-innerwrap">

        <div className="aboutme-det-wrapper">
            <div className="aboutme-cmn">
                <div className="abtmeimg imgwrap">
                    <img src="./images/mypic1.jpg" alt="me" />
                </div>
                <div className="aboutmedet">
                    <h1>Prasad Lakade</h1>
                    <p>UI / Web Developer from Mumbai</p>
                    <p>Computer Engineer based out of Mumbai, with 5+ years of experience in web development!</p>
                </div>
            </div>
            <div className="aboutme-cmn">
                <div><h2>Feel like connecting ? :)</h2></div>
                <div className="social-connect">
                    <button>LinkedIn</button>
                    <button>Twitter</button>
                    <button>Facebook</button>
                    <button>Instagram</button>
                </div>
            </div>
        </div>
        
    </div>
</div>
)
}

export default AboutMe;