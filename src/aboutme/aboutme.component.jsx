import React from 'react';

import './aboutme.styles.css';

class AboutMe extends React.Component {
    constructor(props){
        super();
    }


    render(){
        return(
            <div className="aboutme-wrapper common-wrapper">
            {/* <div className="aboutme-innerwrap">
                <div className="aboutme-det-wrapper">
                    <div className="aboutme-cmn">
                        <div className="abtmeimg imgwrap">
                            <img src={'./images/mypic1.jpg'} alt="me" />
                        </div>
                        <div className="aboutmedet">
                            <h1>Prasad Lakade</h1>
                            <p>UI / Web Developer from Mumbai</p>
                            <p>Computer Engineer based out of Mumbai, with 5+ years of experience in web development!</p>
                        </div>
                    </div>
                </div>
                <div className="aboutme-det-wrapper-two">
                    <div><h2>Feel like connecting ? </h2></div>
                    <div className="social-connect">
                        <button>LinkedIn</button>
                        <button>Twitter</button>
                        <button>Facebook</button>
                        <button>Instagram</button>
                    </div>
                </div>

            </div> */}
            <div className="aboutme-innerwrap">
                <div className="leftblock">
                    <div className="abtmeimg imgwrap">
                    <h1>Prasad Lakade</h1>
                        <img src={'./images/mypic1.jpg'} alt="me" />
                        <div><h2>Need to Connect? </h2></div>
                    <div className="social-connect">
                            <a href="/#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="/#" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="/#" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="/#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                    </div>
                </div>
                <div className="rightblock">
                    <div className="aboutmedet">
                        {/* <h1>Prasad Lakade</h1> */}
                        <p>WEB DEVELOPER from MUMBAI</p>
                        <p>Computer Engineer based out of Mumbai, with 5+ years of experience in Web Development!</p>
                        <hr />
                        {/* <button onClick={() => props.history.push("/skills")}>See skills</button> */}

                    </div>
                </div>
            </div>
        </div>
        )
    }
}


// const AboutMe = () => {
// return(

// )
// }

export default AboutMe;