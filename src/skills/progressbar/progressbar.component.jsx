import React from 'react';
import './progressbar.styles.css';


const ProgressBar = (props) => {
    console.log(props);
    const {id,name,value,...otherAttr} = props;
        
    return(
        // <React.Fragment>
        //     <div className={`progress-bar progressbar-${id}`}>{name}</div> 
        // </React.Fragment>
        
        <div className={`progress-bar progressbar-${id}`}>{name}</div> 
    )
}

export default ProgressBar;