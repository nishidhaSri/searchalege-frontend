import React from "react";
import Chart from "chart.js";

class BarAndPie extends React.Component {
  componentDidMount() {
    var ctx = document.getElementById("myChart").getContext("2d");

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [
          {
            label: "Students joing institutes through years (in Cr.)", // Name the series
            data: [3, 3.1, 3.25, 3.3, 3.5, 3.6, 3.74], // Specify the data values array
            fill: true,
            borderColor: "purple", // Add custom color border (Line)
            backgroundColor: "#fcaaa9", // Add custom color background (Points and Fill)
            borderWidth: 1, // Specify bar border width
          },
        ],
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
      },
    });
  }
  render() {
    return (
      <div>
        <canvas
          id="myChart"
          height="400px"
          width="500px"
          style={{ background: "beige" }}
        ></canvas>
      </div>
    );
  }
}

export default BarAndPie;
