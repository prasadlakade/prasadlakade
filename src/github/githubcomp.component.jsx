import React from 'react';

import './githubcomp.styles.css'

class GitHUbComp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user:[],
            details:[]
        };

        
    }

    componentDidMount(){
        //this.getUser();
        //this.getUserRepo();

        const url1 = "https://api.github.com/users/prasadlakade";
        fetch(url1)
          .then(response => response.json())
          .then(data => {
              this.showUser(data);
          });
          
        const url = "https://api.github.com/users/prasadlakade/repos";
        fetch(url)
          .then(response => response.json())
          .then(data => {
              this.showUserDetails(data);
        });
    }

    showUser(data){
        // console.log(data);
        this.setState({ user:[{
            avatar_url:data.avatar_url,
            name:data.name,
            bio:data.bio,
            followers:data.followers,
            following:data.following,
            html_url:data.html_url,
            location:data.location,
            public_repos:data.public_repos,
            twitter_username:data.twitter_username,
            url:data.url,
        }]})
    }

    showUserDetails(data){
        const reposList = data;
        var repos = [];
        for (const key in reposList) {
            if (reposList.hasOwnProperty(key)) {
                const repo = reposList[key];
                repo.Pos = null;
                if(repo.name.toUpperCase() === "TODOLIST"){
                    repo.Pos = 1;
                }
            
                repos.push({name: repo.name,
                    url: repo.html_url,
                    Pos:repo.Pos,
                    homepage:repo.homepage,
                    desc: repo.description,
                    size: repo.size,
                    language: repo.language,
                    created: repo.created_at,
                    updated:repo.updated_at})

                    
            }
        }
        this.setState({ details:repos})
        //console.log(this.state);
    }
   

    render(){
        const repos = this.state.details;
        const gituser = this.state.user;
        
        return(
            <div className="github-wrapper common-wrapper">
                {/* <h3 className="git-heading">My Profile</h3> */}
                <div className="gitinner-wrap gitinner-wrap-top">
                <h3 className="git-heading">Github Profile</h3>
                {
                    Object.keys(gituser).map((key)=>(
                    <div key={key} className="git-profile-wrapper">
                        
                        <div className="git-profileimage-wrap">
                            <img src={gituser[key].avatar_url} alt={gituser[key].name} title={gituser[key].name}/>
                        </div>
                        <div className="git-details-wrap">
                            <p style={{textTransform :'uppercase',fontWeight:'bold',fontSize:'25px'}}>{gituser[key].name}</p>
                            <p style={{textTransform :'capitalize'}}>{gituser[key].bio}</p>
                            <p>{gituser[key].location}</p>
                            <p style={{marginBottom :'10px'}}>Repos: {gituser[key].public_repos}</p>
                            <a href={gituser[key].html_url} target="_blank" className="common-btn" rel="noopener noreferrer">Checkout on Github</a>
                        </div>
                    </div>
                    ))
                }
                </div>
                <div className="gitinner-wrap gitinner-wrap-bottom">
                    <h3 className="git-heading">Some Github Repos</h3>
                    <div className="git-card-wrapper">
                    {
                        Object.keys(repos).map((key)=>(
                            <div key={key} className="cards">  
                                <a href={repos[key].url} target="_blank" rel="noopener noreferrer">
                                    <h3>{repos[key].name}</h3> 
                                </a>
                                <span>
                                    <p>{repos[key].desc}</p>
                                    {/* <span>Live demo: </span> */}
                                    {/* <a href={repos[key].homepage} target="_blank" rel="noopener noreferrer">Click here</a> */}
                                </span>
                            </div>
                        ))
                    }
                   
                    </div>
                </div>
                
            </div>
        );
    }
}

export default GitHUbComp;
