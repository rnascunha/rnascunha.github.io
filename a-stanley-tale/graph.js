
let main = document.querySelector("main");

function getContentWidth (element)
{
  let styles = getComputedStyle(element)

  return element.clientWidth
    - parseFloat(styles.paddingLeft)
    - parseFloat(styles.paddingRight)
}

let margin = {top: 20, right: 15, bottom: 30, left: 30},
  width = getContentWidth(main) - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

let parseDate = d3.timeParse("%H:%M:%S");

let x = d3.scaleTime().range([0, width]);
let y = d3.scaleLinear().range([height, 0]);

let valueStanley = d3.line()
                .x(function(d){ return x(d.time); })
                .y(function(d){ return y(d.stanley); }),
    valueEnv = d3.line()
                .x(function(d){ return x(d.time); })
                .y(function(d){ return y(d.env); }),
    valueControl = d3.line()
                .x(function(d){ return x(d.time); })
                .y(function(d){ return y(d.control); });

let svg = d3.select("#chart").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");

d3.select("#chart").append("figcaption").text("Temperature comparsion");

let focus = svg.append("g")
    .style("display", "none");
let bisectDate = d3.bisector(function(d) { return d.time; }).left;

d3.tsv('data.tsv').then((data) => {
  data.forEach(d => {
      d.time = parseDate(d.time);
      d.stanley = +d.stanley.replace(',','.');
      d.env = +d.env.replace(',','.');
      d.control = +d.control.replace(',','.');
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.time; }));
  y.domain([0, d3.max(data, function(d) { return Math.max(d.stanley, d.env, d.control); })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line stanley")
      .attr("d", valueStanley);

  svg.append("path")
      .data([data])
      .attr("class", "line env")
      .attr("d", valueEnv);

  svg.append("path")
      .data([data])
      .attr("class", "line control")
      .attr("d", valueControl);

  // Add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%H:%M")));

    // text label for the x axis
  svg.append("text")
      .attr("class", "axis")
      .attr("transform",
            "translate(" + (width/2) + " ," +
                           (height - 10) + ")")
      .style("text-anchor", "middle")
      .text("Time");

  // Add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

  // text label for the y axis
  svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "axis")
        .style("text-anchor", "middle")
        .text("Temperature (C)");

  /**
   * Legend
   */
  var legend = svg.selectAll('g')
      .data(['stanley', 'env', 'control'], d => d)
      .enter()
      .append('g')
      .attr('class', 'legend');

  legend.append('rect')
    .attr('x', width - 75)
    .attr('y', function(d, i) {
      return height - ((3 - i) * 20) - 12;
    })
    .attr('width', 10)
    .attr('height', 10)
    .attr('class', function(d){ return d; });

  legend.append('text')
    .attr('x', width - 55)
    .attr('y', function(d, i) {
      return height - ((3 - i) * 20);
    })
    .text(function(d) {
      return d;
    });

    /**
     *
     */
     focus.append("path") // this is the black vertical line to follow mouse
      .attr("class", "mouse-line")
      .style("opacity", "0");

    /*
     * Pointer
     */
    // append the circle at the intersection
    focus.selectAll('g')
        .data(['stanley', 'env', 'control'], d => d)
        .enter()
        .append("circle")
        .attr("class", (d) => `y ${d}`)
        .style("fill", "none")
        .style("stroke-width", "2px")
        .attr("r", 4);

    focus.select('g')
        .data(['stanley', 'env', 'control'], d => d)
        .append('text')
        .attr('class', d => `text ${d}`)
        .style('fill', 'red')
        .style('stroke', 'blue')
        .text(d => d);

    // append the rectangle to capture mouse
    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function() {
          svg.select(".mouse-line")
            .style("opacity", "1");
          focus.style("display", null);
          focus.selectAll('.text').style('opacity', '1');
        })
        .on("mouseout", function() {
          focus.style("display", "none");
          svg.select(".mouse-line")
            .style("opacity", "0");
          focus.selectAll('.text').style('opacity', '0');
        })
        .on("mousemove", mousemove);

    function mousemove()
    {
  	  let x0 = x.invert(d3.pointer(event, this)[0]),
  		  i = bisectDate(data, x0, 1),
  		  d0 = data[i - 1],
  		  d1 = data[i],
  		  d = x0 - d0.time > d1.time - x0 ? d1 : d0;

  	     focus.select("circle.y.stanley")
  	      .attr("transform",
  	         "translate(" + x(d.time) + "," +
                            y(0.88 * d.stanley) + ")");
          focus.select("circle.y.env")
           .attr("transform",
              "translate(" + x(d.time) + "," +
                             y(0.88 * d.env) + ")");
         focus.select("circle.y.control")
  	      .attr("transform",
  	         "translate(" + x(d.time) + "," +
	                        y(0.88 * d.control) + ")");

          svg.select(".mouse-line")
            .attr("d", function() {
              var dm = "M" + x(d.time) + "," + height;
              dm += " " + x(d.time) + "," + 0;
              return dm;
            });

        focus.data(['stanley', 'env', 'control'], dk => dk)
            .select(d => `.text.${d}`)
            .attr('x', x(d.time))
            .attr('y', dn => y(d[dn]))
            .text(d => d[dn])
  	}
});
