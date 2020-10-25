import React from 'react';
import './githubcomp.styles.css'

class GitHUbComp extends React.Component {
    constructor(props){
        super(props);

        this.state = {};

        
    }

    componentDidMount(){
        //this.getUser();
        //this.getUserRepo();

        const url = "https://api.github.com/users/prasadlakade/repos";
        fetch(url)
          .then(response => response.json())
          .then(data => {
              this.showResult(data);
          });
    }


    showResult(data){
        const reposList = data;
        var repos = [];
        for (const key in reposList) {
            if (reposList.hasOwnProperty(key)) {
                const repo = reposList[key];
                repo.Pos = null;
                if(repo.name.toUpperCase() == "TODOLIST"){
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
        this.setState(repos)
        console.log(this.state);
    }
   


    getUser() {
        return fetch(`https://api.github.com/users/prasadlakade`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
          return response;
         })
    }
 
    getUserRepo() {
        return fetch(`https://api.github.com/users/prasadlakade/repos`)
        .then(response => response.json())
        .then(response => {
            console.log(response);
         return response;
       })
     }

    render(){
        const repos = this.state;
        
        return(
            <div className="github-wrapper common-wrapper">
                <div className="gitinner-wrap">
                    <h3 className="git-heading">Some Github Repos</h3>
                    <div className="git-card-wrapper">
                        
                    {
                        Object.keys(repos).map((key)=>(
                            <div key={key} className="cards">  
                                <a href={repos[key].url} target="_blank">
                                    <h3>{repos[key].name}</h3> 
                                </a>
                                <span>
                                    <p>{repos[key].desc}</p>
                                    <span>Live demo: </span>
                                    <a href={repos[key].homepage} target="_blank">Click here</a>
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
