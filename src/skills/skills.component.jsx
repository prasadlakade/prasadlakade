import React from 'react';
import ProgressBar from './progressbar/progressbar.component';

import './skills.styles.css'

class Skills extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            skillname : [
                {
                    id: "1",
                    name: "HTML",
                    value:"9",
                    total:"10",
                    category:"language",
                    type:"Front-end"
                },{
                    id: "2",
                    name: "CSS",
                    value:"9",
                    total:"10",
                    category:"language",
                    type:"Front-end"
                },{
                    id: "3",
                    name: "Javascript",
                    value:"9",
                    total:"10",
                    category:"language",
                    type:"Front-end"
                }
            ]
        }
        // this.state = [
        //     {
        //         id: "1",
        //         name: "HTML",
        //         value:"9",
        //         total:"10",
        //         category:"language",
        //         type:"Front-end"
        //     },{
        //         id: "2",
        //         name: "CSS",
        //         value:"9",
        //         total:"10",
        //         category:"language",
        //         type:"Front-end"
        //     },{
        //         id: "3",
        //         name: "Javascript",
        //         value:"9",
        //         total:"10",
        //         category:"language",
        //         type:"Front-end"
        //     }
        // ]

    }


    render(){
        return(
        <div className="skills-wrapper common-wrapper">
            {
                this.state.skillname.map( (skill,index) => (
                    <ProgressBar key={index} {...skill}></ProgressBar>
                ))
            }
        </div>
        )
    }
}

export default Skills;


