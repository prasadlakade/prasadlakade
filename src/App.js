import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import AboutMe from './aboutme/aboutme.component';
import Skills from './skills/skills.component';
import ContactMe from './contactme/contactme.component';
import GitHUbComp from './github/githubcomp.component';

import Errorcomp from './Error/errorcomp.component';


import './App.css';


function App() {
  return (
<div className="wrapper gradient-color1">
      <header>
      </header>
      <main>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="bottommenu-bar">
            <div className="bottommenu-bar-wrapper">
                <div className="sectionbutton">
                  <Link className="button" to={process.env.PUBLIC_URL + '/'} >ABOUT ME</Link>
                  <Link className="button" to="/skills" >SKILLS</Link>
                  <Link className="button" to="/contactme" >Contact me</Link>
                  <Link className="button" to="/github" >Github</Link>
                  
                </div>
            </div>
             
          </div>
        
        <div className="main-wrapper">
          {/* <AboutMe></AboutMe>
          <Skills></Skills>
          <ContactMe></ContactMe> */}
           <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={AboutMe}></Route>
                <Route path="/skills" component={Skills}></Route>
                <Route path="/contactme" component={ContactMe}></Route>
                <Route path="/github" component={GitHUbComp}></Route>
                <Route component={Errorcomp} />
              </Switch>
        </div>
        </Router>
      </main>
      <footer></footer>
      {/* <div className="bottommenu-bar">
        <div className="bottommenu-bar-wrapper">
            <div className="sectionbutton">
              <button><Link to="/">ABOUT ME</Link></button>
              <button><Link to="/">SKILLS</Link></button>
              <button><Link to="/">Projects</Link></button>
              {/* <button>SKILLS</button>
              <button>Projects</button>
              <button>Blogs</button>
              <button>Contact me</button> }
            </div>
        </div>
      </div> */}
    </div>   
  );
}

export default App;
