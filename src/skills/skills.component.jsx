import React from 'react';
import ProgressBar from './progressbar/progressbar.component';

import Charts from './charts/charts.component';

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
                },{
                    id: "4",
                    name: "React",
                    value:"7",
                    total:"10",
                    category:"language",
                    type:"Front-end"
                },{
                    id: "5",
                    name: "Angular",
                    value:"7",
                    total:"10",
                    category:"language",
                    type:"Front-end"
                },{
                    id: "6",
                    name: "Boostrap",
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
            {/* {
                this.state.skillname.map( (skill,index) => (
                    <ProgressBar key={index} {...skill}></ProgressBar>
                ))
            } */}
            <Charts skillss={this.state.skillname}/>
        </div>
        )
    }
}

export default Skills;


