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
            skill : skillsOBJ,
        }
        console.log(this.state.skill)
        // d3.select("svg").remove(); 
        // this.drawChart = this.drawChart.bind(this);
        //this.updateDimensions = this.updateDimensions.bind(this);        

    }

   
    componentDidMount(){
        this.drawChart(); 
    }

   
    drawChart(){
        // const data = [19,5,6,40,8,90,80];
        const data = this.state.skill;
        const width = 1000;
        const height = 400;

        // const accessChartref = d3.select(this.chartRef.current)
        //     .append("svg")
        //     .attr("width", width)
        //     .attr("height", height)
        //     // .style("background-color","#963c32")
        //     // .style("padding","40")
        //     .style("width","100%")
        //     .style("color","red");

        // const allRect = accessChartref.selectAll("rect").data(data)
        // .enter();
        // const allRect2 = accessChartref.selectAll("rect").data(data)
        // .enter();


        // allRect.append("rect")
        //     .attr("y",  (d, i) => i * 60)
        //     .attr("x", 0)
        //     .attr("height", 60)
        //     .attr("width", (document.getElementById('chart-wrapper-inner').offsetWidth))
        //     .attr("fill", "#eee")
        //     .attr("stroke", "#333")
        //     .attr("transition", "all 0.3s ease")
        //     .attr("className","backsvg");

        // allRect2.append("rect")
        //     .attr("y",  (d, i) => i * 60)
        //     .attr("x", 0)
        //     .attr("height", 60)
        //     .attr("width", 0)
        //     .attr("fill", "#000")
        //     .attr("stroke", "#333")
        //     .attr("transition", "all 0.3s ease")
        //     .attr("className","frontsvg");


        // accessChartref.select(".frontsvg")
        //     .transition()
        //     .duration(1000)
        //     .attr("width", (d, i) => (document.getElementById('chart-wrapper-inner').offsetWidth - 80) * (d.value / 10))
        //     .delay(function(d,i){console.log(i) ; return(i*100)});
            
        

        // var chartLable = accessChartref.selectAll("text")
        //     .data(data).enter();

        //     chartLable.append("text")
        //     // .attr("x", (d, i) => (((document.getElementById('chart-wrapper-inner').offsetWidth - 80) / 2)))
        //     .attr("x", (d, i) => (100))
        //     .attr("y", (d, i) => ((i*60)+ 35))
        //     .text((d,i) => "( "+d.name+" )")
        //     .style("fill","red");
            
        //     chartLable.append("text")
        //     .attr("x", 20)
        //     .attr("y", (d, i) => ((i*60)+ 35))
        //     .text(function(d,i) { return d.value + "/" +d.total; })
        //     .style("fill","red");



            //svg 2
            const accessChartrefTwo = d3.select(this.chartRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("width","100%")
            .style("height","auto")
            .style("color","red");

            const allRectTwo = accessChartrefTwo.selectAll("rect").data(data)
            .enter();

            allRectTwo.append("rect")
            .attr("y",  (d, i) => i * 60)
            .attr("x", 0)
            .attr("height", 54)
            .attr("width", width)
            .attr("fill", "#eee")
            .attr("stroke", "#333")
            .attr("transition", "all 0.3s ease")
            .attr("className","backsvg");


            allRectTwo.append("rect")
            .attr("y",  (d, i) => i * 60)
            .attr("x", 0)
            .attr("height", 54)
            .attr("width", 0)
            .attr("fill", "#000")
            .attr("stroke", "#333")
            .attr("transition", "all 0.3s ease")
            .attr("className","frontsvg");

            


            accessChartrefTwo.selectAll("rect[className='frontsvg']")
            .transition()
            .duration(1000)
            .attr("width", (d, i) => (document.getElementById('chart-wrapper-inner').offsetWidth - 80) * (d.value / 10))
            .delay(function(d,i){console.log(i) ; return(i*100)});



            var chartLable = accessChartrefTwo.selectAll("text")
            .data(data).enter();

            
            
            chartLable.append("text")
            .attr("x", 20)
            .attr("y", (d, i) => ((i*60)+ 35))
            .text(function(d,i) { return d.value + "/" +d.total; })
            .style("fill","red")
            .style("opacity","0");

            chartLable.append("text")
            // .attr("x", (d, i) => (((document.getElementById('chart-wrapper-inner').offsetWidth - 80) / 2)))
            .attr("x", (d, i) => (100))
            .attr("y", (d, i) => ((i*60)+ 35))
            .text((d,i) => "( "+d.name+" )")
            .style("fill","red")
            .style("opacity","0");


            chartLable.selectAll("text")
            .transition()
            .duration(500)
            .style("opacity","1")
            .delay(function(d,i){console.log(i) ; return(i*100)});

       
    }


    render(){
        return(
            <div id="chart-wrapper-outer" className="chart-wrapper">
                <div id="chart-wrapper-inner" ref={this.chartRef}></div>
            </div>
        )
    }
}

export default Charts;

