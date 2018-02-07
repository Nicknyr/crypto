import React from 'react';
import * as d3 from 'd3';


class Chart extends React.Component {

  componentDidMount() {
    var url = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=200&aggregate=3&e=CCCAGG";

        // This needs to be changed to my API request
    d3.json(url).get(function(error, d) {

    	var data = d.Data;
      data.forEach(function(d){ d.time = new Date(d.time * 1000) });

      if (error) throw error;

      var svg = d3.select("svg"),
          margin = {top: 20, right: 20, bottom: 30, left: 50},
          width = +svg.attr("width") - margin.left - margin.right,
          height = +svg.attr("height") - margin.top - margin.bottom,
          g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Added this to try to make it responsive
    d3.select("div#chartId")
       .append("div")
       .classed("svg-container", true) //container class to make it responsive
       .append("svg")
       //responsive SVG needs these 2 attributes and no width and height attr
       .attr("preserveAspectRatio", "xMinYMin meet")
       .attr("viewBox", "0 0 600 400")
       //class to make it responsive
       .classed("svg-content-responsive", true);
    // End of new stuff

      var parseTime = d3.timeParse("%d-%b-%y");

      var x = d3.scaleTime()
          .rangeRound([0, width]);

      var y = d3.scaleLinear()
          .rangeRound([height, 0]);

      var line = d3.line()
          .x(function(d) { return x(d.time); })
          .y(function(d) { return y(d.close); });

      x.domain(d3.extent(data, function(d) { return d.time; }));
      y.domain(d3.extent(data, function(d) { return d.close; }));

      g.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x))
        .select(".domain")
          .remove();

      g.append("g")
          .call(d3.axisLeft(y))
        .append("text")
          .attr("fill", "#000")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "0.71em")
          .attr("text-anchor", "end")
          .text("Price ($)");

      g.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "#FFB041")
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("stroke-width", 2)
          .attr("d", line);
    });

  }

  render() {
      return (
          <svg id="chartId" width="960" height="500"
            viewBox="0 0 960 500" preserveAspectRatio="xMidYMid meet"
            ref={d => (this.svg = d)}
          />

     )
    }
}

export default Chart;
