import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import AboutMe from './aboutme/aboutme.component';
import Skills from './skills/skills.component';
import ContactMe from './contactme/contactme.component';
import GitHUbComp from './github/githubcomp.component';

import Errorcomp from './Error/errorcomp.component';


import './App.css';

class App extends React.Component {
  constructor(props){
    super();
    
    this.state = {};
    this.startloader=this.startloader.bind();

    setTimeout(this.closeLoader,2000);

  }

  startloader(){
    document.querySelector('.mainloader').classList.remove('closeloader');
  }
  
  closeLoader(){
    document.querySelector('.mainloader').classList.add('closeloader');
  }

  render() {
    return(
      <div className="wrapper gradient-color1">
        {/* <div className="mainloader">loading....</div> */}
          <header>
          </header>
          <main>
            <Router basename={process.env.PUBLIC_URL}>
              <div className="bottommenu-bar">
                <div className="bottommenu-bar-wrapper">
                    <div className="sectionbutton">
                      <Link className="button" to='/' >ABOUT ME</Link>
                      <Link className="button" to="/skills" >SKILLS</Link>
                      <Link className="button" to="/contactme" >Contact me</Link>
                      <Link className="button" to="/github" >Github</Link>
                      
                    </div>
                </div>
                
              </div>
            
            <div className="main-wrapper">
            
              <Switch>
                    <Route exact path='/' component={AboutMe}></Route>
                    <Route path="/skills" component={Skills}></Route>
                    <Route path="/contactme" component={ContactMe}></Route>
                    <Route path="/github" component={GitHUbComp}></Route>
                    <Route component={Errorcomp} />
                  </Switch>
            </div>
            </Router>
          </main>
          <footer></footer>
        </div> 
    )
  }
}


export default App;
