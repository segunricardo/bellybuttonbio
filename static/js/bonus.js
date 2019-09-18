
function buildGauge(wfreq) {
  console.log(wfreq)
  var data = [
  	{
  		domain: { x: [0, 1], y: [0, 1] },
  		value: wfreq,
  		title: { text: "Scrubs per Week" },
  		type: "indicator",
  		mode: "gauge+number",
  		gauge: {
  			bar: {color: "#14baba"},
  			axis: {
  				range: [0, 9]},
  				steps: [
  					{range: [0, 1], color: "#F7F3ED"},
  					{range: [1, 2], color: "#F4F1E6"},
  					{range: [2, 3], color: "#E9E6CD"},
  					{range: [3, 4], color: "#E6E6B8"},
  					{range: [4, 5], color: "#D8E3A5"},
  					{range: [5, 6], color: "#BBCB98"},
  					{range: [6, 7], color: "#97BD8D"},
  					{range: [7, 8], color: "#94B993"},
  					{range: [8, 9], color: "#8FB28D"}
  				]}
  	}
  ];

  var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  var GAUGE = document.getElementById("gd");
   Plotly.newPlot(GAUGE, data, layout);

}
