import React from 'react';
import * as d3 from 'd3';

import './charts.styles.css';


class Charts extends React.Component{
    constructor(props){
        super();

        this.chartRef = React.createRef();
        // console.log(props.skillss);
        const skillsOBJ = props.skillss;
        this.state = {
            skill : skillsOBJ
        }
        console.log(this.state.skill)
    }
    componentDidMount(){
        // let accessChartref = d3.select(this.chartRef.current);
        // accessChartref.style("background-color","red");
        // accessChartref.selectAll("rect")
        //     .data(data)
        //     .enter()
        //     .append("rect")
        this.drawChart();

        
    }

    drawChart(){
        // const data = [19,5,6,40,8,90,80];
        const data = this.state.skill;
        const width = 1000;
        const height = 400;

        const accessChartref = d3.select(this.chartRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            // .style("background-color","#963c32")
            // .style("padding","40")
            .style("width","100%")
            .style("color","red");
    

        accessChartref.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("y",  (d, i) => i * 60)
            .attr("x", 0)
            .attr("height", 50)
            .attr("width", 0)
            .attr("fill", "#000")
            .attr("transition", "all 0.3s ease")
            //.append("text")
            //.text((d,i) => d.name)
            // .attr("class", "hover-tex capo")
            // .attr('dy', "0.35em")
            // .style("stroke","red");


            accessChartref.selectAll("rect")
            .transition()
            .duration(1000)
            //.attr("width", (d, i) => d.value * 100)
            .attr("width", (d, i) => (document.getElementById('chart-wrapper').offsetWidth - 80) * (d.value / 10))
            .delay(function(d,i){console.log(i) ; return(i*100)})

            var chartLable = accessChartref.selectAll("text")
            .data(data).enter();

            chartLable.append("text")
            .attr("x", (d, i) => (((document.getElementById('chart-wrapper').offsetWidth - 80) / 2)))
            .attr("y", (d, i) => ((i*60)+ 35))
            .text(function(d,i) { return d.name; })
            .style("fill","red");
            
            chartLable.append("text")
            .attr("x", 20)
            .attr("y", (d, i) => ((i*60)+ 35))
            .text(function(d,i) { return d.value + "/" +d.total; })
            .style("fill","red");
            
    

            

       
    }


    render(){
        return(
            <div id="chart-wrapper" className="chart-wrapper">
                <div ref={this.chartRef}></div>
            </div>
        )
    }
}

export default Charts;

